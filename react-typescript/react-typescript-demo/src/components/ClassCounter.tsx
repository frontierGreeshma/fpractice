import React from "react"

type counterState = {
    count: number
}

type counterProps = {
    message: string
}

export class ClassCounter extends React.Component<counterProps, counterState> {
    state = {
        count: 0,
    }

    handleClick = () => {
        this.setState((prevState) =>({
            count: prevState.count  +1
        }))
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Increment</button>
                {this.props.message} {this.state.count}
            </div>
        )
    }
}