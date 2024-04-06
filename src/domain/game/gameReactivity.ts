import type { UserGameState, UserInGameState } from "./types";
import { africanCapitalCitiNamesGameConfig } from "./exampleGameConfigs";
import { createSignal } from "solid-js";

export default {
    gameConfig: createSignal(africanCapitalCitiNamesGameConfig),
    userInGameState: createSignal<UserInGameState>("IN_PROGRESS"),
    currentStage: createSignal(africanCapitalCitiNamesGameConfig.stages.at(0)!),
    result: createSignal({
        score: 0,
        id: "1",
    }),
} satisfies UserGameState;
