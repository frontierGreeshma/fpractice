type StatusProps = {
    status: "Loading" | "Success" | "Error"   // Union of string literals, used this to avoid any different props from being accepted. If "jbfjebfkjbe" some random string is passed, this doesn't throw error here, or in App.tsx.
}

export const Status = (props: StatusProps) => {
    let message;
    if(props.status === "Loading") {
        message = "Loading"
    } else if (props.status === "Success") {
        message = "Success"
    } else {
        message = "Error"
    }
    return (
        <div>
            {message}
        </div>
    )
}