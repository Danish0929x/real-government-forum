const connectionbtn = document.querySelector(".conn-btn");
const paraAddress = document.querySelector(".address");
const submitBtn = document.querySelector(".submit");
const admBtn = document.querySelector(".adm-btn");

let account;

connectionbtn.addEventListener("click", async () => {
  if (window.ethereum !== "undefined") {
    const accounts = await ethereum.request({
      method: "eth_requestAccounts",
    });
    account = accounts[0];
    connectionbtn.style.display = "none";
    paraAddress.innerHTML = `Connected account: ${account}`;

    if (account === "0x39b2c4727cc9c7a01d61c952e87ad78ed141ce1c") {
      admBtn.style.display = "block";
    }

    connectContract();
    if (connectContract) {
      console.log("Connected to contract");
    }
  }
});

//2- connect to smart contract
const connectContract = async () => {
  const ABI = [
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_userName",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "_assetCount",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "_details",
          "type": "string"
        }
      ],
      "name": "addProperty",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_userName",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "_assetCount",
          "type": "uint256"
        }
      ],
      "name": "deleteProperty",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [],
      "name": "assetCount",
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
      "inputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "assets",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_userName",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "_assetCount",
          "type": "uint256"
        }
      ],
      "name": "readProperty",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ];

  const Address = "0x2e32D154EB41C77934e1ba2eBd5ec433e43E14e7";
  window.web3 = await new Web3(window.ethereum);
  window.contract = await new window.web3.eth.Contract(ABI, Address);
  console.log("Connected to contract");
};



//4 - Get all the data of single user
var userName = document.getElementById("user-name");

userName.addEventListener("keypress", async function (event) {
  if (event.key === "Enter") {
    var userNamValue = userName.value
    htmlThing = `
    <table>
        <tr>
            <th>Serial no</th>
            <th>Type</th>
            <th>Description</th>
        </tr>`;
    var dataPara = document.querySelector(".data");
    var tableThing = document.querySelector(".table-thing");
    for (let i = 0; i < 10; i++) {
      const data2 = await window.contract.methods
        .readProperty(userNamValue, i)
        .call();
      if (data2 == "") {
        break;
      } else {
        let seperate = data2.split(",");
        htmlThing =
          htmlThing +
          `<tr>
            <td>${i + 1}</td>
            <td>${seperate[0]}</td>
            <td>${seperate[1]}</td>
            </tr>`;
      }
    }
    htmlThing = htmlThing + `</table>`;
    console.log(htmlThing);
    tableThing.innerHTML = htmlThing;
  }
});
