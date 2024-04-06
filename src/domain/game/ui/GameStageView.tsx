import { Component, JSX, Show } from "solid-js";
import { GameStage } from "@millie/domain/game/types";
import { getCurrentStageNumber } from "@millie/domain/game/gameReactivity";

const GameStageView: Component<{
    gameStage?: GameStage;
    children: JSX.Element;
}> = (props) => {
    return (
        <Show when={!!props.gameStage}>
            <div>
                <p>Faza: {getCurrentStageNumber()}</p>
                <p>Gra o cenę: {props.gameStage!.price}</p>
                {props.children}
            </div>
        </Show>
    );
};

export default GameStageView;
