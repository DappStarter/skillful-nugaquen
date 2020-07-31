require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict forget force sugar guard render remember solid guess argue front slab'; 
let testAccounts = [
"0x71e72452adc416671d891edb72608b02d2a4eb964e2e1b790c5dba09ea7bf33f",
"0x11e96885a16b9e305b649c526bdd5df3e84fba62f11ece64a433ed6f2e3a6def",
"0x0694c35010b8e8acc28ea09898db3659e5093ba3c91952d83b2c658b826d2d43",
"0x18b9ba18796c9c43f224a1a347359273e3feaf156e7b89ca722d5c99ff7349f7",
"0xe72dec7b4aa45c5c69a5b309cf1c8a7e305c90673da3cbc9d4358c35c60ee49a",
"0xfb516b1c64665208f1338bbe204db63feac75e838f2ecd752f93582b9e03aa15",
"0x633b862430762d6542f617f4d505290384dd53d85e3d041bda632f8c1aae55fc",
"0xae0146437d88495f305b9f703ecf13f883e7723444bd1ddd667c10b740323327",
"0x6ec191fa3adb9f878a48fa1b3737d76841b043a08ebce33577b790999753e540",
"0x372aca7d07352d959fe0e95bc555cbc4300091e0dd7208c37e29ec9d921dc665"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
