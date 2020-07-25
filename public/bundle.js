var contractABI =  [
    {
      "constant": true,
      "inputs": [],
      "name": "hello",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "pure",
      "type": "function"
    }
  ];

var contractAddress = '0x0337B90e7d054207Ab495e53a3B06B4DB49Ac7e1';
var web3 = new Web3["http://127.0.0.1:9545/"];
var helloWorld = new web3.eth.Contract(contractABI, contractAddress);


document.addEventListener('DOMContentLoaded', () => {
	helloWorld.methods,hello().call().then(result => {
	document.getElementById('hello').innerHTML = result;
});

});
