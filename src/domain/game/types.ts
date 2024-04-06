/**
 * Determines how game will look to the user
 */
export type GameConfig = {
    id: string;
    stages: GameStage[];
};


/**
 * The shape of the game stage
 */
export type GameStage = {
    id: string;
    order: number;
    price: number;
    task: GameTask;
};

/**
 * The shape of the task in the game stage
 */
export type GameTask = {
    id: string;
    description: string;
    answers: GameTaskAnswer[];
};

/**
 * The shape of the answer
 */
export type GameTaskAnswer = {
    id: string;
    value: string;
};

/**
 * Determines how game went to the user
 */
export type GameResult = {
    id: string;
    score: number;
};
