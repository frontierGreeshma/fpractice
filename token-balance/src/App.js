import './App.css';
import Web3 from 'web3';

function App() {

  const provider = "https://mainnet.infura.io/v3/d86b2be189c44ff9a927fbacb0a9f7a0";
  const web3Client = new Web3(new Web3.providers.HttpProvider(provider));

  const minABI = [  
    // balanceOf
    {    
      constant: true,
  
      inputs: [{ name: "_owner", type: "address" }],
  
      name: "balanceOf",
  
      outputs: [{ name: "balance", type: "uint256" }],
  
      type: "function",
    },
  
  ];

  const tokenAddress = "0xf8C3527CC04340b208C854E985240c02F7B7793f";
  const walletAddress = "0xfC43f5F9dd45258b3AFf31Bdbe6561D97e8B71de";

  const contract = new web3Client.eth.Contract(minABI, tokenAddress);

  async function getBalance() {
    const result = await contract.methods.balanceOf(walletAddress).call();
    
    const format = web3Client.utils.fromWei(result);

    console.log(format);
  }

  return (
    <div className="App">
      <button onClick={getBalance}>Get Balance</button>
    </div>
  );
}

export default App;
