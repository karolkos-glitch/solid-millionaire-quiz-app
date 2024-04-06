import { currentStage } from "@millie/domain/game/gameReactivity";
import GameStageView from "@millie/domain/game/ui/GameStageView";
import GameTaskAnswerView from "@millie/domain/game/ui/GameTaskAnswerView";
import GameTaskView from "@millie/domain/game/ui/GameTaskView";
import { Component, For } from "solid-js";

const Game: Component = () => {
    return (
        <div>
            <GameStageView gameStage={currentStage()}>
                <GameTaskView gameTask={currentStage()?.task}>
                    <For each={currentStage()?.task.answers}>
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
