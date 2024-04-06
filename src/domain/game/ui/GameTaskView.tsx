import { Component, JSX, Show } from "solid-js";
import { GameTask } from "../types";

const GameTaskView: Component<{
    gameTask?: GameTask;
    children: JSX.Element;
}> = (props) => {
    return (
        <Show when={!!props.gameTask}>
            <div>
                <span>
                    <strong>Treść Pytania: </strong>
                    {props.gameTask!.description}
                </span>
                <div class="flex gap-x-4">{props.children}</div>
            </div>
        </Show>
    );
};

export default GameTaskView;
