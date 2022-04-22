import React from "react"

// // Used when has no values to pass
// type ButtonProps = {
//     handleClick: () => void
// }

type ButtonProps = {
    handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void
}

export const Button = (props: ButtonProps) => {
    // return <button>Click Me</button>
    return <button onClick={(event) => props.handleClick(event, 1)}>Click Here</button>
}