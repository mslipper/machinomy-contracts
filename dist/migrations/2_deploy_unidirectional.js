"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ECRecovery = artifacts.require('ECRecovery.sol');
const Unidirectional = artifacts.require('Unidirectional.sol');
module.exports = function deploy(deployer) {
    return deployer.deploy(ECRecovery).then(() => {
        return deployer.link(ECRecovery, Unidirectional);
    }).then(() => {
        return deployer.deploy(Unidirectional);
    });
};
//# sourceMappingURL=2_deploy_unidirectional.js.map