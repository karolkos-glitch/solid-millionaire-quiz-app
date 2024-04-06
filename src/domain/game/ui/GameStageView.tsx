import { Component, JSX, Show } from "solid-js";
import { GameStage } from "@millie/domain/game/types";

const GameStageView: Component<{
    gameStage?: GameStage;
    children: JSX.Element;
}> = (props) => {
    return (
        <Show when={!!props.gameStage}>
            <div>
                <p>Faza: {props.gameStage!.order}</p>
                <p>Gra o cenę: {props.gameStage!.price}</p>
                {props.children}
            </div>
        </Show>
    );
};

export default GameStageView;
