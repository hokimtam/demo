"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Web3 = require("web3");
var TruffleContract = require("truffle-contract");
var tokenAbi = require('../../../build/contracts/Payment.json');
var EthcontractService = /** @class */ (function () {
    function EthcontractService() {
        if (typeof window.web3 !== 'undefined') {
            this.web3Provider = window.web3.currentProvider;
        }
        else {
            this.web3Provider = new Web3.providers.HttpProvider('http://localhost:7545');
        }
        window.web3 = new Web3(this.web3Provider);
    }
    EthcontractService.prototype.getAccountInfo = function () {
        return new Promise(function (resolve, reject) {
            window.web3.eth.getCoinbase(function (err, account) {
                if (err === null) {
                    web3.eth.getBalance(account, function (err, balance) {
                        if (err === null) {
                            return resolve({ fromAccount: account, balance: web3.fromWei(balance, "ether") });
                        }
                        else {
                            return reject("error!");
                        }
                    });
                }
            });
        });
    };
    EthcontractService.prototype.transferEther = function (_transferFrom, _transferTo, _amount, _remarks) {
        var that = this;
        return new Promise(function (resolve, reject) {
            var paymentContract = TruffleContract(tokenAbi);
            paymentContract.setProvider(that.web3Provider);
            paymentContract.deployed().then(function (instance) {
                return instance.transferFund(_transferTo, {
                    from: _transferFrom,
                    value: web3.toWei(_amount, "ether")
                });
            }).then(function (status) {
                if (status) {
                    return resolve({ status: true });
                }
            }).catch(function (error) {
                console.log(error);
                return reject("Error in transferEther service call");
            });
        });
    };
    EthcontractService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], EthcontractService);
    return EthcontractService;
}());
exports.EthcontractService = EthcontractService;
//# sourceMappingURL=ethcontract.service.js.map