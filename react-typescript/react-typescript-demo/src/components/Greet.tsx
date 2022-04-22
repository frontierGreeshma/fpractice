type GreetProps = {
    name: string;
    messageCount?: number, // "Optional Props" => If we dont give any one of the props,... its throws an error saying this parameter/props is nt given. To avoid tht, we put "?"
    isLoggedIn: boolean,
}

export const Greet = (props: GreetProps) => {
    console.log(props);
    const {messageCount = 0} = props;
    return (
        <div>
            {
                props.isLoggedIn ? <h1>Welcome {props.name}, You have {messageCount} unread messages</h1> : <h1>Welcome Guest</h1>
                // props.isLoggedIn ? <h1>Welcome {props.name}, You have {messageCount} unread messages</h1> : <h1>Welcome Guest</h1>
            }
        </div>
    )
}