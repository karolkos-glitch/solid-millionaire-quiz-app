import { Component } from "solid-js";
import { GameTaskAnswer } from "@millie/domain/game/types";
import Button from "@millie/components/Button";
import { passCurrentStage } from "@millie/domain/game/gameReactivity";

const GameTaskAnswerView: Component<GameTaskAnswer> = (props) => {
    return (
        <Button type="button" onClick={passCurrentStage}>
            {props.value}
        </Button>
    );
};

export default GameTaskAnswerView;
