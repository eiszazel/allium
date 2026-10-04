import { mkdir, readFile, realpath, writeFile } from 'node:fs/promises';
import { readFileSync, realpathSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
const sourcePath = 'contracts/Bulb.sol';
const outputPath = path.join(root, 'contracts/out/Bulb.json');
const settings = {
  optimizer: { enabled: true, runs: 200 },
  evmVersion: 'paris',
  outputSelection: {
    '*': { '*': ['abi', 'evm.bytecode.object', 'evm.deployedBytecode.object'] },
  },
};

async function build() {
  const { default: solc } = await import('solc');
  const compilerVersion = solc.version();
  if (!compilerVersion.startsWith('0.8.28+')) {
    throw new Error(`Expected solc 0.8.28; found ${compilerVersion}. Run npm ci with the pinned dependencies.`);
  }
  const openZeppelinRoot = await realpath(path.join(root, 'node_modules/@openzeppelin/contracts'));
  const dependency = JSON.parse(await readFile(path.join(openZeppelinRoot, 'package.json'), 'utf8'));
  if (dependency.version !== '5.1.0') {
    throw new Error(`Expected @openzeppelin/contracts 5.1.0; found ${dependency.version}.`);
  }
  const source = await readFile(path.join(root, sourcePath), 'utf8');
  const input = {
    language: 'Solidity',
    sources: { [sourcePath]: { content: source } },
    settings,
  };
  const output = JSON.parse(solc.compile(JSON.stringify(input), {
    import(importPath) {
      const prefix = '@openzeppelin/contracts/';
      if (!importPath.startsWith(prefix)) {
        return { error: `Unsupported import: ${importPath}` };
      }
      try {
        const resolved = realpathSync(path.resolve(openZeppelinRoot, importPath.slice(prefix.length)));
        const relative = path.relative(openZeppelinRoot, resolved);
        if (relative === '..' || relative.startsWith(`..${path.sep}`) || path.isAbsolute(relative)) {
          return { error: `Import escapes OpenZeppelin package: ${importPath}` };
        }
        return { contents: readFileSync(resolved, 'utf8') };
      } catch (error) {
        return { error: `Cannot read ${importPath}: ${error.message}` };
      }
    },
  }));
  for (const diagnostic of output.errors ?? []) {
    console.error(diagnostic.formattedMessage ?? diagnostic.message);
  }
  if ((output.errors ?? []).some((diagnostic) => diagnostic.severity === 'error')) {
    throw new Error('Solidity compilation failed; no artifact was written.');
  }
  const contract = output.contracts?.[sourcePath]?.Bulb;
  if (!contract?.evm?.bytecode?.object || !contract?.evm?.deployedBytecode?.object) {
    throw new Error('Compiler output is missing the Bulb bytecode; no artifact was written.');
  }
  const artifact = {
    contractName: 'Bulb',
    sourceName: sourcePath,
    abi: contract.abi,
    bytecode: `0x${contract.evm.bytecode.object}`,
    deployedBytecode: `0x${contract.evm.deployedBytecode.object}`,
    compiler: {
      name: 'solc',
      version: compilerVersion,
      settings,
      dependencies: { '@openzeppelin/contracts': dependency.version },
    },
  };
  await mkdir(path.dirname(outputPath), { recursive: true });
  await writeFile(outputPath, `${JSON.stringify(artifact, null, 2)}\n`);
  console.log('Compiled contracts/Bulb.sol → contracts/out/Bulb.json');
}

build().catch((error) => {
  console.error(`Contract build failed: ${error.message}`);
  process.exitCode = 1;
});
