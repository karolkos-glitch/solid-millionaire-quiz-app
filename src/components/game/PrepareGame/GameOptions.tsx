import { Component, For, JSXElement } from "solid-js";

const GameOptions: Component<{
    items: JSXElement[];
}> = (props) => {
    return (
        <div class="grid grid-cols-1 py-10  md:grid-cols-2  lg:grid-cols-3">
            <For each={props.items}>{(component) => component}</For>
        </div>
    );
};

export default GameOptions;
