import GameView from "@millie/components/game/GameView";
import gameReactivity from "@millie/domain/game/gameReactivity";

import { Component, createEffect } from "solid-js";

const Game: Component = () => {
    const {
        userInGameState: [getUserInGameState, setUserInGameState],
        currentStage: [_getCurrentStage, setCurrentStage],
        gameConfig: [getGameConfig],
        result: [_getResult, setResult],
    } = gameReactivity;

    createEffect(() => {
        if (getUserInGameState() !== "RESET") return;
        setUserInGameState(() => "PREPARE_GAME");
        setCurrentStage(getGameConfig().stages.at(0)!);
        setResult((prevResult) => ({
            id: String(Number(prevResult.id + 1)),
            score: 0,
        }));
    });

    return <GameView />;
};

export default Game;
