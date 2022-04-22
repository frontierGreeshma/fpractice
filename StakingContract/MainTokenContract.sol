// SPDX-License-Identifier: MIT

// 1. Creating an ERC-20 token

pragma solidity ^0.8.12;

contract greeshmatoken {
    // 2. Set the events of the token
    event Transfer (address indexed from, address indexed to, uint tokens);
    event Approval (address indexed tokenOwner, address indexed spender, uint tokens);

    // 3. Set the name, symbols and decimal of the token
    string public constant name = "GD Coin";
    string public constant symbol = "GDC";
    uint8 public constant decimals = 18;

    // 4. Set the balances and allowances map
    mapping (address => uint256) balances;
    mapping (address => mapping (address => uint256)) allowed;

    // 5. Declare the total supply
    uint256 totalSupply_;

    // 6. Set the amount of the total supply and the balances
    constructor (uint256 total) {
        totalSupply_ = total;
        balances[msg.sender] = totalSupply_;
    }

    // 7. Get the balance of an owner
    function balancesOf(address tokenOwner) public view returns (uint) {
        return balances[tokenOwner];
    }

    // 8. Transfer tokens to an account
    function transfer(address receiver, uint numTokens) public returns (bool) {
        require(numTokens <= balances[msg.sender]);
        balances[msg.sender] -= numTokens;
        balances[receiver] += numTokens;
        emit Transfer(msg.sender, receiver, numTokens);
        return true;
    }

    // 9. Approve a token transfer
    function approve(address delegate, uint numTokens) public returns(bool) {
        allowed[msg.sender][delegate] = numTokens;
        emit Approval(msg.sender, delegate, numTokens);
        return true;
    }

    // 10. Get the allowance status of an account
    function allowance(address owner, address delegate) public view returns (uint) {
        return allowed[owner][delegate];
    }

    // 11. Transfer tokens from an account to another account
    function transferFrom (address owner, address buyer, uint numTokens) public returns (bool) {
        require(numTokens <= balances[owner]);
        require(numTokens <= allowed[owner][msg.sender]);
        balances[owner] -= numTokens;
        allowed[owner][msg.sender] -= numTokens;
        balances[buyer] += numTokens;
        emit Transfer(owner, buyer, numTokens);
        return true;
    }
}