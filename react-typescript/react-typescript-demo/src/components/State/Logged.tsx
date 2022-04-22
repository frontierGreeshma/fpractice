import { useState } from "react"

export const Logged = () => {

    const [loggedIn, setLoggedIn] = useState(false);

    const handleLogIn = () => {
        setLoggedIn(true);
    }
    const handleLogOut = () => {
        setLoggedIn(false);
    }

    return (
        <div>
            <button onClick={handleLogIn}>Log IN</button>
            <button onClick={handleLogOut}>Log OUT</button>
            {
                loggedIn ? <div>User is Logged In</div> : <div>User is Logged Out</div>
            }
        </div>
    )
}