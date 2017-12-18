module.exports = {
  testCommand: 'truffle migrate && yarn run truffle:test:vanilla',
  testrpcOptions: '--networkId 999 --port 8555',
  copyPackages: ['zeppelin-solidity']
}
