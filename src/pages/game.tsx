import Button from "@millie/components/Button";
import gameReactivity from "@millie/domain/game/gameReactivity";
import GameStageView from "@millie/components/GameStageView";
import GameTaskAnswerView from "@millie/components/GameTaskAnswerView";
import GameTaskView from "@millie/components/GameTaskView";
import { Component, createEffect, For, Match, Show, Switch } from "solid-js";
import GameResult from "@millie/components/GameResult";

const Game: Component = () => {
    const {
        userInGameState: [getUserInGameState, setUserInGameState],
        currentStage: [getCurrentStage, setCurrentStage],
        gameConfig: [getGameConfig],
        result: [getResult, setResult],
    } = gameReactivity;

    createEffect(() => {
        if (getUserInGameState() !== "RESET") return;
        setUserInGameState(() => "ABLE_TO_PLAY");
        setCurrentStage(getGameConfig().stages.at(0)!);
        setResult((prevResult) => ({
            id: String(Number(prevResult.id + 1)),
            score: 0,
        }));
    });

    return (
        <div>
            <Switch>
                <Match when={getUserInGameState() === "ABLE_TO_PLAY"}>
                    <Show when={getCurrentStage()}>
                        {(stage) => (
                            <GameStageView gameStage={stage()}>
                                <GameTaskView
                                    description={stage().task.description}
                                >
                                    <For each={stage().task.answers}>
                                        {(gameTaskAnswer) => (
                                            <GameTaskAnswerView
                                                {...gameTaskAnswer}
                                            />
                                        )}
                                    </For>
                                </GameTaskView>
                            </GameStageView>
                        )}
                    </Show>
                </Match>
                <Match when={getUserInGameState() === "GAME_WON"}>
                    Win!
                    <GameResult score={getResult().score} />
                    <Button
                        type="button"
                        onClick={() => setUserInGameState(() => "RESET")}
                    >
                        Try to win again!!!
                    </Button>
                </Match>
                <Match when={getUserInGameState() === "GAME_FAILURE"}>
                    Failure!
                    <GameResult score={getResult().score} />
                    <Button
                        type="button"
                        onClick={() => setUserInGameState(() => "RESET")}
                    >
                        Try again!!!
                    </Button>
                </Match>
                <Match when={getUserInGameState() === "RESET"}>
                    Resetting game...
                </Match>
            </Switch>
        </div>
    );
};

export default Game;
