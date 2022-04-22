// type PersonListProps = {
//     nameList: {
//         first: string,
//         last: string
//     }[]
// }

import { Name } from "./Person.types"

type PersonListProps = {
    nameList: Name[]
}

export const PersonList = (props: PersonListProps) => {
    return (
        <ul>
            {
                props.nameList.map(name => {
                    return (
                        <li>{name.first} {name.last}</li>
                    )
                })
            }
        </ul>
    )
}