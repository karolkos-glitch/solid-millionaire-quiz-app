import { Component } from "solid-js";
import { GameTaskAnswer } from "@millie/domain/game/types";
import Button from "@millie/components/Button";
import gameReactivity from "@millie/domain/game/gameReactivity";

const GameTaskAnswerView: Component<GameTaskAnswer> = (props) => {
    const answer = () => {
        const {
            currentStage: [getCurrentStage, setCurrentStage],
            gameConfig: [getGameConfig],
            result: [_result, setResult],
            userInGameState: [_inProgress, setUserInGameState],
        } = gameReactivity;
        const userAnswerId = props.id;
        const { price, task, id: currentStageValueId } = getCurrentStage();
        const correctAnswer = task.correctAnswerId;
        const userGaveCorrectAnswer = userAnswerId === correctAnswer;
        if (!userGaveCorrectAnswer) {
            setUserInGameState(() => "GAME_FAILURE");
            return;
        }

        const { stages } = getGameConfig();
        setResult((prevResult) => ({
            ...prevResult,
            score: price,
        }));
        const currentStageIndexInGameConfig = stages.findIndex(
            ({ id }) => id === currentStageValueId,
        );
        if (currentStageIndexInGameConfig === -1) {
            throw new Error("Cannot found currentStageIndexInGameConfig");
        }
        const nextGameStage = stages.at(currentStageIndexInGameConfig + 1);
        if (nextGameStage) {
            setCurrentStage(nextGameStage);
            return;
        }
        setUserInGameState(() => "GAME_WON");
    };

    return (
        <Button type="button" onClick={answer}>
            {props.value}
        </Button>
    );
};

export default GameTaskAnswerView;
