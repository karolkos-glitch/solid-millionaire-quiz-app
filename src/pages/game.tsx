import { gameStore } from "@millie/domain/game/gameStore";
import GameStageView from "@millie/domain/game/ui/GameStageView";
import GameTaskAnswerView from "@millie/domain/game/ui/GameTaskAnswerView";
import GameTaskView from "@millie/domain/game/ui/GameTaskView";
import { Component, createMemo, For } from "solid-js";

const Game: Component = () => {
    const [game] = gameStore;
    const currentStage = createMemo(() =>
        game().gameConfig.stages.find(
            (_, index) => index + 1 === game().currentStage,
        ),
    );
    const currentStageTask = createMemo(() => currentStage()?.task);
    const currentStageTaskAnswers = createMemo(
        () => currentStageTask()?.answers ?? [],
    );
    return (
        <div>
            <GameStageView gameStage={currentStage()}>
                <GameTaskView gameTask={currentStageTask()}>
                    <For each={currentStageTaskAnswers()}>
                        {(gameTaskAnswer) => (
                            <GameTaskAnswerView {...gameTaskAnswer} />
                        )}
                    </For>
                </GameTaskView>
            </GameStageView>
        </div>
    );
};

export default Game;
