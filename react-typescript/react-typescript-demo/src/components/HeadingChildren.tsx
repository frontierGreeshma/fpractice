type HeadingChildrenProps = {
    children: string
}

export const HeadingChildren = (props: HeadingChildrenProps) => {
    return <h2>{props.children}</h2>
}