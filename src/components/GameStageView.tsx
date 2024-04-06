import { Component, JSX } from "solid-js";
import { GameStage } from "@millie/domain/game/types";
const GameStageView: Component<{
    gameStage: GameStage;
    children: JSX.Element;
}> = (props) => {
    return (
        <div>
            <p>Faza: {props.gameStage.order}</p>
            <p>Gra o cenę: {props.gameStage.price}</p>
            {props.children}
        </div>
    );
};

export default GameStageView;
