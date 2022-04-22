type StyleContainerProps = {
    styles: React.CSSProperties
}

export const StyleContainer = (props: StyleContainerProps) => {
    return <h2 style={props.styles}>Welcome Code</h2>
}