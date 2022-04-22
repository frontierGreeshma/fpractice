import Card from "../Card";

function Home (props) {
    return (
        <Card>
            <h1>Welcome</h1>
            <h4>Account: {props.currentAccount}</h4>
            <h5>Balance: {props.accBalance} ETH</h5>
        </Card>
    )
}

export default Home