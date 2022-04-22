import React from "react";
import { Greet } from "../Greet";

export const Extract = (props: React.ComponentProps<typeof Greet>) => {
    return (
        <div>hello {props.name}</div>
    )
}