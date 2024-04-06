import { Signal } from "solid-js";

export type UserInGameState =
    | "IN_PROGRESS"
    | "GAME_WON"
    | "GAME_FAILURE"
    | "RESET";

/**
 * Determines how game will look to the user
 */
export type GameConfig = {
    id: ID;
    stages: GameStage[];
};

export type UserGameState = {
    userInGameState: Signal<UserInGameState>;
    gameConfig: Signal<GameConfig>;
    currentStage: Signal<GameStage>;
    result: Signal<GameResult>;
};

/**
 * The shape of the game stage
 */
export type GameStage = {
    id: ID;
    order: number;
    price: number;
    task: GameTask;
};

/**
 * The shape of the task in the game stage
 */
export type GameTask = {
    id: ID;
    description: string;
    answers: GameTaskAnswer[];
    correctAnswerId: ID;
};

type ID = string;
/**
 * The shape of the answer
 */
export type GameTaskAnswer = {
    id: ID;
    value: string;
};

/**
 * Determines how game went to the user
 */
export type GameResult = {
    id: ID;
    score: number;
};
