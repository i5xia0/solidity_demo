const { expect } = require("chai");

describe("HelloWorld", function () {
    it("Should return the correct greeting", async function () {
        const HelloWorld = await ethers.getContractFactory("HelloWorld");
        const helloWorld = await HelloWorld.deploy();
        expect(await helloWorld.greet()).to.equal("Hello World!");
    });
});
