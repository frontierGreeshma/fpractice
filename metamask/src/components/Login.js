import { useState } from "react";
import Card from "../Card";

function Login (props) {

    const [isConnected, setIsConnected] = useState(false);

    const detectProvider = () => {
        let provider;
        if(window.ethereum) {
            provider = window.ethereum;
        } else if (window.web3) {
            provider = window.web3.currentProvider;
        } else {
            window.alert("No Ethereum Provider detected! Check out Metamask");
        }
        return provider;
    }

    const onLoginHandler = async () => {
        const provider = detectProvider();

        if (provider) {
            if (provider !== window.ethereum) {
                console.error ("Not window.ethereum provider. Do you have multile wallet installed");
            };
            setIsConnected(!isConnected)
            await provider.request({
                method: 'eth_requestAccounts',
            });
            setIsConnected(!isConnected)
            props.setConnection(provider);
        }        
    }

    const buttonCSS = {
        background: "#676666",
        color: "white",
        fontWeight: "bold",
        fontSize: "18px",
        borderRadius: "30px",
        border: "none",
        padding: "10px 20px"
    }

    return (
        <div>
            <Card>
                <button onClick={onLoginHandler} style={buttonCSS}>
                    {!isConnected && "Connect"}
                    {isConnected && "Loading..."}
                </button>
            </Card>
        </div>
    )
}

export default Login