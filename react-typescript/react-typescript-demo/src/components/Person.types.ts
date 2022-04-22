export type personProps = {
    name: {
        firstName: string,
        lastName: string
    }
}



// extracting props from below
export type Name = {
    first: string,
    last: string
}

// export type PersonList = {
//     nameList: {
//         first: string,
//         last: string
//     }
// }

// after extracting
export type PersonList = {
    nameList: Name
}