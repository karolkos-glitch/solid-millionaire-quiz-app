import { Component, JSX } from "solid-js";

const GameTaskView: Component<{
    description: string;
    children: JSX.Element;
}> = (props) => {
    return (
        <div class="flex flex-col items-center gap-y-4 px-8 py-4 ">
            <strong>{props.description}</strong>
            <div class="grid grid-cols-2 gap-4">{props.children}</div>
        </div>
    );
};

export default GameTaskView;
