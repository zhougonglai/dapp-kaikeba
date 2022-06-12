//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract ClassTokenSale is Ownable {
    address public tokenAddress;
    uint256 public tokenPrice;

    constructor(address _address, uint _tokenPrice) {
        tokenAddress = _address;
        tokenPrice = _tokenPrice;
    }

    function buy() public payable {
        require(msg.value > 0, "must supply eth");

        uint amount = msg.value * tokenPrice;
        require(
            IERC20(tokenAddress).balanceOf(address(this)) > amount,
            "not enough tokens"
        );
        IERC20(tokenAddress).transfer(msg.sender, amount);
    }

    function withdrawAll() public onlyOwner {
        payable(msg.sender).transfer(address(this).balance);
        uint amount = IERC20(tokenAddress).balanceOf(address(this));
        IERC20(tokenAddress).transfer(msg.sender, amount);
    }
}
