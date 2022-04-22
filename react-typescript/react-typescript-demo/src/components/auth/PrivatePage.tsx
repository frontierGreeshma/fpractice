import { Login } from "./Login"
import { ProfileTypes } from "./Profile"

type PrivatePageProps = {
    isLoggedIn: boolean,
    component: React.ComponentType<ProfileTypes>
}

export const PrivatePage = ({ isLoggedIn, component:Component }: PrivatePageProps) => {
    if (isLoggedIn) {
        return <Component name="Greeshma" />
    } else {
        return <Login />
    }
}