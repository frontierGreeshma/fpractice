import { useContext } from "react"
import { UserContext } from "./UserContext"

export const Users = () => {

    const userContext = useContext(UserContext)

    const handleLogIn = () => {
        if(userContext) {
            userContext.setUser({
                name: "Greeshma",
                email: "greeshma@example.com"
            })
        }
    }

    const handleLogOut = () => {
        if(userContext) {
            userContext.setUser(null)
        }
    }

    return (
        <div>
            <button onClick={handleLogIn}>Log In</button>
            <button onClick={handleLogOut}>Log Out</button>
            {/* <h3>User Name - {userContext?.user?.name}</h3>
            <h3>User Email - {userContext?.user?.email}</h3> */}
            <h3>User Name - {userContext.user?.name}</h3>
            <h3>User Email - {userContext.user?.email}</h3>
        </div>
    )
}