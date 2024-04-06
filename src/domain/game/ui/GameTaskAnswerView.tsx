import { Component } from "solid-js";
import { GameTaskAnswer } from "@millie/domain/game/types";
import Button from "@millie/components/Button";
import { gameStore } from "@millie/domain/game/gameStore";

const GameTaskAnswerView: Component<GameTaskAnswer> = (props) => {
    const [_, setGameStore] = gameStore;
    const passCurrentStage = () => {
        setGameStore((prevGameStore) => {
            return {
                ...prevGameStore,
                currentStage: prevGameStore.currentStage + 1,
            };
        });
    };

    return (
        <Button type="button" onClick={passCurrentStage}>
            {props.value}
        </Button>
    );
};

export default GameTaskAnswerView;
