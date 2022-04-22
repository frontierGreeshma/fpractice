export type ProfileTypes = {
    name: string
}

export const Profile = ({name}: ProfileTypes) => {
    return (
        <div>Profile Page. Name is {name}</div>
    )
}