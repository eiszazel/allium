# Original ONION contract

`Bulb.sol` is the original source from the `contracts/Bulb.sol` member of `onion_farm_memecoin_narrative_game_t0gg25.zip`. It was copied byte-for-byte, including its original line endings: 410 bytes, LF line endings, and a final newline. No archive credentials, deployment scripts, or unrelated artifacts are included.

The contract's original name is `Bulb`, its ERC-20 name is `ONION Token`, and its symbol is `ONION`. Construction mints 1,000,000,000 tokens with 18 decimals to the supplied `initialHolder`. There are no added deployment helpers, owner/admin functions, or post-construction mint functions. Standard ERC-20 transfers, approvals, and allowance-based transfers come from OpenZeppelin.

## Reproducible local compilation

From the repository root:

```sh
npm ci
npm run contracts:build
```

The canonical compiler is `scripts/build-contract.mjs`, using exactly `solc` 0.8.28 and `@openzeppelin/contracts` 5.1.0 from the pinned npm dependencies. Settings match the original compiler configuration: optimizer enabled, 200 runs, EVM target `paris`. The source retains its original `pragma solidity ^0.8.20`; the build selects and checks the exact compiler version.

The script resolves only OpenZeppelin package imports from `node_modules`, rejects imports that escape that package, reports compiler diagnostics, and exits unsuccessfully on dependency, import, compiler, or output errors. A successful build writes `contracts/out/Bulb.json`, containing the ABI, creation bytecode, deployed bytecode, and compiler/dependency settings. This is a generated local artifact, not a deployment record. A failed build does not replace an existing artifact; do not treat an artifact from an earlier build as evidence of a later build's success.

`contracts/foundry.toml` preserves the compiler settings and maps OpenZeppelin to the same npm package. For optional Foundry use, run Forge from the `contracts` directory so its relative paths resolve correctly. No RPC endpoints, network configuration, keys, or deployment workflow are provided. npm compilation is canonical; Forge is not required.

## Limits and provenance caveats

This source is not audited, and compiling it is not an audit or legal approval. This repository does not establish a deployment, chain, contract address, liquidity, verified explorer record, or live token activity. The original notice mentions Arc; that preserved comment is historical source text, not evidence of a deployment on Arc or any other network.

$ONION is the associated memecoin, not ownership in Allium data infrastructure or a future founder-owned LLC farm. Token ownership grants no equity, farm ownership, redemption, revenue share, governance entitlement, or other claim on an off-chain asset. The farm remains a future goal, not a token-backed promise or crowdfunding offer.

## Local release verification

The restored file matched the archive byte-for-byte. Compilation passed with the pinned settings. A throwaway local EthereumJS VM execution verified the exact supply, full allocation to the constructor recipient, original metadata, transfers, allowance-based transfers and allowance reduction, rejected overspending without balance changes, and rejection of a zero-address initial holder. These checks made no network transactions and do not establish an Arc deployment or a formal audit.
