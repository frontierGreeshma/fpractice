import { useState } from "react"

type Authuser = {
    user: string,
    email: string
}

export const UserAssertion = () => {

    // when we are sure what type as to be provided
    const [user, setUser] = useState<Authuser>({} as Authuser)

    const handleLogIn = () => {
        setUser({
            user: "Greeshma",
            email: "greeshma@example.com"
        })
    }

    return (
        <div>
            <button onClick={handleLogIn}>Log In</button>
            <div>Logged UserName - {user.user} UserEmail - {user.email}</div>
        </div>
    )
}