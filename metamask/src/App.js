import { useState } from "react"
import Home from "./components/Home"
import Login from "./components/Login"
import Web3 from "web3"

function App() {

  const [connect, setConnect] = useState(false)
  const [currentAccount, setCurrentAccount] = useState(null)
  const [accBalance, setAccBalance] = useState(null)

  const setConnection = async (provider) => {
    const web3 = new Web3(provider);
    const accounts = await web3.eth.getAccounts();
    if (accounts.length === 0) {
      console.log("Please connect to Metamask");
    } else if (accounts[0] !== currentAccount) {
      setCurrentAccount(accounts[0]);
      setConnect(!connect);
      const choosenAccount = web3.utils.toChecksumAddress(accounts[0]);
      setAccBalance(web3.utils.fromWei(await web3.eth.getBalance(choosenAccount)));
    }
  }

  console.log(currentAccount);

  return (
    <div className="App">
      {connect && <Home setDisconnection={setConnection} currentAccount={currentAccount} accBalance={accBalance} />}
      {!connect && <Login setConnection={setConnection} />}
    </div>
  );
}

export default App;
