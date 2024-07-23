// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract Variables {
    // 状态变量存储在区块链上。
    string public text = "Hello";
    uint256 public num = 123;

    // 定义事件以记录日志
    event LogInfo(
        uint256 indexed timestamp,
        address indexed sender,
        uint256 localVar
    );

    function doSomething() public {
        // 本地变量不会被保存到区块链上。
        uint256 i = 456;

        // 一些全局变量的示例
        uint256 timestamp = block.timestamp; // 当前区块的时间戳
        address sender = msg.sender; // 调用者的地址

        // 使用事件记录日志
        emit LogInfo(timestamp, sender, i);
    }
}
