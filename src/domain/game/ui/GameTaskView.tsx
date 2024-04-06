import { Component } from "solid-js";
import GameTaskAnswerView from "./GameTaskAnswerView";
import { GameTask } from "../types";

const GameTaskView: Component<GameTask> = (props) => {
    return (
        <div>
            <span>
                <strong>Treść Pytania: </strong>
                {props.description}
            </span>
            <div class="flex gap-x-4">
                {props.answers.map((gameTaskAnswer) => (
                    <GameTaskAnswerView {...gameTaskAnswer} />
                ))}
            </div>
        </div>
    );
};

export default GameTaskView;
