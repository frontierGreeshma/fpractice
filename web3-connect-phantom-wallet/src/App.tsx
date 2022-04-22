import { PublicKey, Connection, Transaction, clusterApiUrl } from "@solana/web3.js";
// import {TOKEN_PROGRAM_ID} from '@solana/spl-token'
import { useEffect, useState } from "react";
import './App.css';


type DisplayEncoding = "utf8" | "hex";
type PhantomEvent = "disconnect" | "connect" | "accountChanged";
type PhantomRequestMethod = "connect" | "disconnect" | "signTransaction" | "signAllTransactions" | "signMessage";

interface ConnectOpts {
  onlyIfTrusted: boolean;
}

interface PhantomProvider {
  publicKey: PublicKey | null;
  isConnected: boolean | null;
  signTransaction: (transaction: Transaction) => Promise<Transaction>;
  signAllTransactions: (trasactions: Transaction[]) => Promise<Transaction[]>;
  signMessage: (
    message: Uint8Array | string,
    display?: DisplayEncoding
  ) => Promise<any>;
  connect: (opts?: Partial<ConnectOpts>) => Promise<{publicKey: PublicKey}>;
  disconnect: () => Promise<void>;
  on: (event: PhantomEvent, handler: (args: any) => void) => void;
  request: (method: PhantomRequestMethod, params: any) => Promise<unknown>;
}



function App() {
  const [provider, setProvider] = useState<PhantomProvider | undefined>(undefined);
  const [balance, setBalance] = useState<number | undefined>(undefined);
  const [walletKey, setWalletKey] = useState<PhantomProvider | undefined>(undefined);


  //  @description gets Phantom provider, if it exists

  const getProvider = (): PhantomProvider | undefined => {
    if("solana" in window) {
      const provider = window.solana as any;
      if (provider.isPhantom) return provider as PhantomProvider;
    }
  };


  // @description prompts user to connect wallet if it exists

  const connectWallet = async () => {
    const { solana } = window;

    if (solana) {
      try {
        const response = await solana.connect();
        console.log("wallet account ", response.publicKey.toString());
        setWalletKey(response.publicKey.toString());

        const connection = new Connection(clusterApiUrl("devnet"), "confirmed");
        let wallet = new PublicKey(response.publicKey.toString());
        console.log(await connection.getBalance(wallet));
        setBalance(await connection.getBalance(wallet));



        // Get the list of tokens of a wallet address

        //the public solana address
        const accountPublicKey = new PublicKey(
          "2B1Uy1UTnsaN1rBNJLrvk8rzTf5V187wkhouWJSApvGT"
        );

      //mintAccount = the token mint address
        const mintAccount = new PublicKey(
          "GLmaRDRmYd4u3YLfnj9eq1mrwxa1YfSweZYYZXZLTRdK"
        );
        const account = await connection.getTokenAccountsByOwner(accountPublicKey, {
            mint: mintAccount});

        console.log(account.value[1].pubkey.toString());

      } catch (err) {
        // { code: 4001, message: 'User rejected the request.' }
      }
    }
  };

  

  // @description disconnect Phantom wallet

  const disconnectWallet = async () => {
    const { solana } = window;

    if (walletKey && solana) {
      await (solana as PhantomProvider).disconnect();
      setWalletKey(undefined);
    }
  };



  // detect phantom provider exists

  useEffect(() => {
    const provider = getProvider();

    if (provider) setProvider(provider);
    else setProvider(undefined);
  }, []);


  return (
    <div className="App">
      <header className="App-header">
        <h2>Tutorial: Connect to Phantom Wallet</h2>
        {provider && !walletKey && (
          <button
            style={{
              fontSize: "16px",
              padding: "15px",
              fontWeight: "bold",
              borderRadius: "5px"
            }}
            onClick={connectWallet}
          >
            Conect to Phantom Wallet
          </button>
        )}

        {provider && walletKey && (
          <div>
            <h1>Connect account {walletKey}</h1>
            <p>Balance of the Wallet : {balance}</p>
            <button
              style={{
                fontSize: "16px",
                padding: "15px",
                fontWeight: "bold",
                borderRadius: "5px",
                margin: "15px auto",
              }}
              onClick={disconnectWallet}
            >
              Disconnect
            </button>
          </div>
        )}


        
        {!provider && (
          <p>
            No provider found. Install {" "}
            <a href="https://phantom.app/">Phantom Browser Extension</a>
          </p>
        )}

        <p>
          Built by {" "}
          <a
            href="https://twitter.com/arealesramirez"
            target="_blank"
            rel="noreferrer"
            className="twitter-link"
          >
            @arealesramirez
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
