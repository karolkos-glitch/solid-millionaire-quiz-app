import type { GameConfig } from "./types";
import { africanCapitalCitiNamesGameConfig } from "./exampleGameConfigs";
import { createSignal } from "solid-js";

type GameStore = {
    gameConfig: GameConfig;
    currentStage: number;
};

export const gameStore = createSignal<GameStore>({
    gameConfig: africanCapitalCitiNamesGameConfig,
    currentStage: 1,
});

export const passCurrentStage = () => {
    const [_, setGameStore] = gameStore;
    setGameStore((prevGameStore) => {
        prevGameStore.currentStage++;
        return prevGameStore;
    });
};
