import { Component } from "solid-js";
import GameTaskView from "./GameTaskView";
import { GameStage } from "../types";

const GameStageView: Component<GameStage> = (props) => {
    return (
        <div>
            <p>Faza: {props.order}</p>
            <p>Gra o cenę: {props.price}</p>
            <GameTaskView {...props.task} />
        </div>
    );
};

export default GameStageView;
