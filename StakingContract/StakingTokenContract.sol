// SPDX-License-Identifier: MIT
pragma solidity ^0.8.12; 

import "./rgreeshmatoken.sol";
import "./greeshmatoken.sol";

contract stake {

    string public name = "Stake Token";
    address public owner;
    rgreeshmatoken public GRcoin;
    greeshmatoken public Gcoin;

    address[] public stakers;
    mapping(address => uint) public stakingBalance;
    mapping(address => bool) public hasStaked;
    mapping(address => bool) public isStaking;

    constructor(rgreeshmatoken _grcoin, greeshmatoken _gtcoin) {
        GRcoin = _grcoin;
        Gcoin = _gtcoin;
        owner = msg.sender;
    }


    function stakeTokens(uint _amount) public {
        require(_amount > 0, "amount cannot be 0");
        Gcoin.transferFrom(msg.sender, address(this), _amount);
        stakingBalance[msg.sender] = stakingBalance[msg.sender] + _amount;

        if(!hasStaked[msg.sender]) {
            stakers.push(msg.sender);
        }

        isStaking[msg.sender] = true;
        hasStaked[msg.sender] = true;
    }


    function unstakeTokens() public {
        uint balance = stakingBalance[msg.sender];
        
        require(balance > 0, "staking balance cannit be 0");

        Gcoin.transfer(msg.sender, balance);
        stakingBalance[msg.sender] = 0;
        isStaking[msg.sender] = false;
    }


    function issueTokens() public {
        require(msg.sender == owner, "caller must be the owner");

        for (uint i=0; i<stakers.length; i++) {
            address recipient = stakers[i];
            uint balance = stakingBalance[recipient];
            if(balance > 0) {
                GRcoin.transfer(recipient, balance);
            }
        }
    }

}
