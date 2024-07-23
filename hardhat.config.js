require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  ignition: {
    modules: [
      "./ignition/modules/HelloWorld.js",
      "./ignition/modules/Counter.js",
    ],
    networks: {
      localhost: {
        url: "http://127.0.0.1:8545"
      }
    }
  },
};
