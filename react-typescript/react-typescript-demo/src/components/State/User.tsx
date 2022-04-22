import { useState } from "react"

type AuthUser = {
    user: string,
    email: string
}


export const User = () => {

    const [user, setUser] = useState<AuthUser | null>(null)

    const handleLogin = () => {
        setUser({
            user: "Greeshma",
            email: "greeshma@example.com"
        })
    }

    const handleLogout = () => {
        setUser(null);
    }

    return (
        <div>
            <button onClick={handleLogin}>LogIn</button>
            <button onClick={handleLogout}>LogOut</button>
            <div>Logged In Username - {user?.user} Useremail - {user?.email}</div>
            {/* "?" indicates that, user details possibly could be null also. If its null, odesnt show anything, if not null,.. will show the data passed */}
        </div>
    )
}
