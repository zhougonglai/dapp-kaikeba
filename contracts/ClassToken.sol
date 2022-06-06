//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract ClassToken is ERC20 {
    uint256 public balance = 18;

    constructor(uint256 initialSupply) ERC20("ClassToken", "CLT") {
        _mint(msg.sender, initialSupply);
    }

    function increment(uint256 amount) public {
        _mint(msg.sender, msg.sender.balance + amount);
    }

    function decrement(uint256 amount) public {
        _mint(msg.sender, msg.sender.balance - amount);
    }
}
