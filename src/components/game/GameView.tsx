import gameReactivity from "@millie/domain/game/gameReactivity";

import { Component, Match, Show, Switch } from "solid-js";
import PrepareGame from "@millie/components/game/PrepareGame";
import Playing from "@millie/components/game/Playing";
import GameWon from "@millie/components/game/GameWon";
import GameFailure from "@millie/components/game/GameFailure";
import Reset from "@millie/components/game/Reset";

const GameView: Component = () => {
    const {
        userInGameState: [getUserInGameState],
        currentStage: [getCurrentStage],
    } = gameReactivity;

    return (
        <Switch>
            <Match when={getUserInGameState() === "PREPARE_GAME"}>
                <PrepareGame />
            </Match>
            <Match when={getUserInGameState() === "PLAYING"}>
                <Show when={getCurrentStage()}>
                    {(currentStage) => <Playing stage={currentStage()} />}
                </Show>
            </Match>
            <Match when={getUserInGameState() === "GAME_WON"}>
                <GameWon />
            </Match>
            <Match when={getUserInGameState() === "GAME_FAILURE"}>
                <GameFailure />
            </Match>
            <Match when={getUserInGameState() === "RESET"}>
                <Reset />
            </Match>
        </Switch>
    );
};

export default GameView;
