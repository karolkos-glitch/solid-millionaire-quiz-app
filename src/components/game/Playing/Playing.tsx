import GameStageView from "@millie/components/game/Playing/GameStageView";
import GameTaskAnswerView from "@millie/components/game/Playing/GameTaskAnswerView";
import GameTaskView from "@millie/components/game/Playing/GameTaskView";
import { GameStage } from "@millie/domain/game/types";
import { Component, For } from "solid-js";

const Playing: Component<{
    stage: GameStage;
}> = (props) => {
    return (
        <GameStageView gameStage={props.stage}>
            <GameTaskView description={props.stage.task.description}>
                <For each={props.stage.task.answers}>
                    {(gameTaskAnswer) => (
                        <GameTaskAnswerView {...gameTaskAnswer} />
                    )}
                </For>
            </GameTaskView>
        </GameStageView>
    );
};

export default Playing;
