import { personProps } from "./Person.types" // proptypes and tips
// We can export and import types


// type personProps = {
//     name: {
//         firstName: string,
//         lastName: string,
//     }
// }

export const Person = (props: personProps) => {
    return (
        <div>
            <h2>{props.name.firstName} {props.name.lastName}</h2>
        </div>
    )
}