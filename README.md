# demo

# install this, skip if installed
npm
truffle
ganache
node
ng
solidity (solc)

# CREATING A SMART CONTRACT

- Create an empty folder, ex: demo
- cd demo
- truffle init

# ADD PAYMENT CONTRACT

- Create file Payment.sol under "contracts" folder 
- Add this:

pragma solidity ^0.4.17;
contract Payment {
address transferFrom;
address transferTo;
uint paymentAmount;
constructor() public {
transferFrom = msg.sender;
}
event TransferFund(address _transferTo, address _transferFrom, uint amount);
function transferFund(address _transferTo) public payable returns (bool){
transferTo = _transferTo;
transferTo.transfer(msg.value);
emit TransferFund(transferTo, transferFrom, msg.value);
return true;
}
function getBalanceOfCurrentAccount() public payable returns (uint) {
return transferFrom.balance;
}
}



# CONFIGURE DEPLOYMENT NETWORK
change in file truffle.js

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks : {
	privateNode: {
      host: '127.0.0.1',
      port: 8501,               
      network_id: '*'
    },
    ganache: {
      host: "127.0.0.1",
      port: 8080,
      network_id: "*"
    }
	}
};


# Run the contract deployment command
truffle migrate --compile-all --reset --network ganache


# CREATING AN ANGULAR APP
ng new transfer
cd transfer
npm start


# CONNECT TO WEB3

INSTALL WEB3JS
npm install web3@0.20.5

Install truffle-contract and generate service using the following commands:
$ npm install truffle-contract
$ ng generate service ethcontract
CREATE src/app/ethcontract.service.spec.ts (404 bytes)
CREATE src/app/ethcontract.service.ts (140 bytes)

http://localhost:4200


