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
var ethcontract_service_1 = require("./ethcontract.service");
var AppComponent = /** @class */ (function () {
    function AppComponent(ethcontractService) {
        var _this = this;
        this.ethcontractService = ethcontractService;
        this.title = 'your first DApp in Angular';
        this.transferFrom = '0x0';
        this.balance = '0 ETH';
        this.transferTo = '';
        this.amount = 0;
        this.remarks = '';
        this.initAndDisplayAccount = function () {
            var that = _this;
            _this.ethcontractService.getAccountInfo().then(function (acctInfo) {
                that.transferFrom = acctInfo.fromAccount;
                that.balance = acctInfo.balance;
            }).catch(function (error) {
                console.log(error);
            });
        };
        this.initAndDisplayAccount();
    }
    AppComponent.prototype.transferEther = function (event) {
        var that = this;
        this.ethcontractService.transferEther(this.transferFrom, this.transferTo, this.amount, this.remarks).then(function () {
            that.initAndDisplayAccount();
        }).catch(function (error) {
            console.log(error);
            that.initAndDisplayAccount();
        });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        }),
        __metadata("design:paramtypes", [ethcontract_service_1.EthcontractService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map