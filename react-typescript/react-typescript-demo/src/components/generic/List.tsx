// type ListProps = {
//     items: string[] | number[],
//     onClick: (value: string | number) => void
// }

// export const List = ({ items, onClick }: ListProps) => {
//     return (
//         <div>
//             {
//                 items.map((item, index) => {
//                     return (
//                         <div key={index} onClick={() => onClick(item)}>{item}</div>
//                     )
//                 })
//             }
//         </div>
//     )
// }

// In the above code.... items props could hv any type array of data(integer, string, float or objects). If we want the code to work, then we shd mention each type
// By using Generics, we can avoid mentioning each type, and get to know the data type during compilation time

type ListProps<T> = {
    items: T[],
    onClick: (value: T) => void
}

// export const List = <T extends { id: number }>({ items, onClick }: ListProps<T>) => { // if array of objects are used and to mention, the id is key
export const List = <T extends {}>({ items, onClick }: ListProps<T>) => {
    return (
        <div>
            {
                items.map((item, index) => {
                    return (
                        // <div key={item.id} onClick={() => onClick(item)}>{item}</div> if above commented line is used
                        <div key={index} onClick={() => onClick(item)}>{item}</div>
                    )
                })
            }
        </div>
    )
}