// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";

/// @notice ONION is a fixed-supply memecoin on Arc. No admin key. No claim on any off-chain asset. The farm is the show.
contract Bulb is ERC20 {
    constructor(address initialHolder) ERC20("ONION Token", "ONION") {
        _mint(initialHolder, 1_000_000_000 * 10 ** 18);
    }
}
