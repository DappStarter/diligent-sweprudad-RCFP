require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good enter bottom solution finger deliver remind humble grace logic outer silver'; 
let testAccounts = [
"0xeba443ef114a17cfb4548b45077921f42e5f9edf942eef6a41e55e95c5f1cf26",
"0xd7598c8d208c3e838895cbacca260aa2e088a1c2fcf335b433f26b9914024207",
"0xff6be1457547a3b61a36b344c26d9e1ee8e0eb05e90cf4c32bf356052f45c2f2",
"0x0ce646ea393563edb8dc5690f1d41c882bf3a6bfc8733f09513eb1153296856d",
"0x44e271a3d8601e65434eb9acf40d19270e00c88a1381d23d6cd8ca03184131ed",
"0x71d87c339eb54005d3c3d241436234cb80ae79f7e3c3959bfc66e2bf65ecc336",
"0x061c6f2de0317f9a28341b4838959b1f2ee2d2ff54ae871972340e4b56ae9c29",
"0x540b988478347d5ee4510066a05a51de1d360a0a7a707cbd60bc7bca743cb595",
"0x00cd455f02cc7de339574ac78dd87906a06570e7062b73375e82d2c454fc39ac",
"0x857ea41264b89802d8a5ea2263169eeede0353e3010b9f897f0e9cb927f968e0"
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
            version: '^0.8.0'
        }
    }
};

