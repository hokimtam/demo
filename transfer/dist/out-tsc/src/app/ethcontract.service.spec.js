"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var ethcontract_service_1 = require("./ethcontract.service");
describe('EthcontractService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [ethcontract_service_1.EthcontractService]
        });
    });
    it('should be created', testing_1.inject([ethcontract_service_1.EthcontractService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=ethcontract.service.spec.js.map