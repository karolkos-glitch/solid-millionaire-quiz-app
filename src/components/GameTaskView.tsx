import { Component, JSX } from "solid-js";

const GameTaskView: Component<{
    description: string;
    children: JSX.Element;
}> = (props) => {
    return (
        <div class="flex flex-col gap-y-4 bg-slate-400 px-8 py-4 ">
            <strong>{props.description}</strong>
            <div class="grid grid-cols-2 gap-4">{props.children}</div>
        </div>
    );
};

export default GameTaskView;
