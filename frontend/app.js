

let provider;
let signer;
let counterContract;
const counterAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3'; // 替换为实际的合约地址
const counterABI = [
    {
        "inputs": [],
        "name": "count",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "dec",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "get",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "inc",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
];

document.getElementById('connectButton').onclick = async () => {
    await connectWallet();
};

document.getElementById('incrementButton').onclick = async () => {
    await incrementCount();
};

document.getElementById('decrementButton').onclick = async () => {
    await decrementCount();
};

async function connectWallet() {
    if (window.ethereum) {
        provider = new ethers.providers.Web3Provider(window.ethereum);
        await provider.send("eth_requestAccounts", []);
        signer = provider.getSigner();
        counterContract = new ethers.Contract(counterAddress, counterABI, signer);
        updateCount();
    } else {
        alert("Please install MetaMask!");
    }
}

async function updateCount() {
    if (counterContract) {
        const count = await counterContract.get();
        document.getElementById('count').innerText = `Current Count: ${count}`;
    }
}

async function incrementCount() {
    if (counterContract) {
        const tx = await counterContract.inc();
        await tx.wait();
        updateCount();
    }
}

async function decrementCount() {
    if (counterContract) {
        const tx = await counterContract.dec();
        await tx.wait();
        updateCount();
    }
}
