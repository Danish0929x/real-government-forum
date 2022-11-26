const connectWallet = async () => {
    if (window.ethereum !== "undefined") {
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      account = accounts[0];
      connectionbtn.style.display = "none";
      paraAddress.innerHTML = `Connected account: ${account}`;
  

      connectContract();
      if (connectContract) {
        console.log("Connected to contract");
      }
    }
  }

//2- connect to smart contract
const connectContract = async () => {
    const ABI = [
      {
        inputs: [
          {
            internalType: "string",
            name: "_userName",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "_assetCount",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "_details",
            type: "string",
          },
        ],
        name: "addProperty",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "string",
            name: "_userName",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "_assetCount",
            type: "uint256",
          },
        ],
        name: "deleteProperty",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [],
        stateMutability: "nonpayable",
        type: "constructor",
      },
      {
        inputs: [],
        name: "assetCount",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "string",
            name: "",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        name: "assets",
        outputs: [
          {
            internalType: "string",
            name: "",
            type: "string",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "string",
            name: "_userName",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "_assetCount",
            type: "uint256",
          },
        ],
        name: "readProperty",
        outputs: [
          {
            internalType: "string",
            name: "",
            type: "string",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
    ];
  
    const Address = "0x7929Fff7b1a2af3F1021DFFb5887007f9fD41778";
    window.web3 = await new Web3(window.ethereum);
    window.contract = await new window.web3.eth.Contract(ABI, Address);
    console.log("Connected to contract");
  };
  
 
