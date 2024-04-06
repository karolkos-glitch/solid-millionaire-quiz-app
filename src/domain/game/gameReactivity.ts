import type { GameConfig } from "./types";
import { africanCapitalCitiNamesGameConfig } from "./exampleGameConfigs";
import { createMemo, createSignal } from "solid-js";

const [gameConfig, _setGameConfig] = createSignal<GameConfig>(
    africanCapitalCitiNamesGameConfig,
);
const [currentStageNumber, setCurrentStage] = createSignal(0);

export const getCurrentStageNumber = currentStageNumber;
export const passCurrentStage = () => setCurrentStage(currentStageNumber() + 1);
export const currentStage = createMemo(
    () => {
        const _currentStageNumber = currentStageNumber();
        const _currentGameConfig = gameConfig();
        const _currentStage = _currentGameConfig.stages.find(
            (_, index) => index === _currentStageNumber,
        );
        return _currentStage;
    },
    {
        name: "CURRENT_STAGE",
    },
);

export const currentTask = createMemo(() => currentStage()?.task);
