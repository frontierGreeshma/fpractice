import { IState as ListProps } from "../App"

// type ListProps = {
//     people: {
//         id: number,
//         name: string,
//         age: number,
//         note?: string,
//         url?: string
//     }[]
// }

// function List({ people }: ListProps) {

const List: React.FC<ListProps> = ({people}) => {

    const renderList = (): JSX.Element[] => {  // (): JSX.Element[] => tell what we should return. This is telling to return JSX elements with an array
        return people.map(person => {
            return <div key={person.id} style={{"display":"flex", "width":"60%", "justifyContent":"space-between","border":"1px solid #ccc", "margin":"8px auto", "padding":"8px"}}>
                <div style={{"width":"20%"}}>{person.name}</div>
                <div style={{"width":"20%"}}>{person.age}</div>
                <div style={{"width":"20%"}}>{person.note}</div>
                <div style={{"width":"20%"}}>{person.url}</div>
            </div>
        })
    }

    console.log(people);

    return (
        <div>
            {renderList()}
        </div>
    )
}

export default List