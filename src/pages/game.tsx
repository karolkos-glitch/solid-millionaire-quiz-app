import { GameStage } from "@millie/domain/game/types";
import GameStageView from "@millie/domain/game/ui/GameStageView";
import { Component } from "solid-js";

const Game: Component = () => {
    const currentGameStage = {
        id: "0",
        price: 400,
        order: 2,
        task: {
            id: "1",
            description: "Co jest stolicą Angoli?",
            answers: [
                {
                    id: "1",
                    value: "Kair",
                },
                {
                    id: "2",
                    value: "Addis-Abeba",
                },
                {
                    id: "3",
                    value: "Warszawa",
                },
                {
                    id: "4",
                    value: "Nikozja",
                },
            ],
        },
    } satisfies GameStage;

    return (
        <div>
            <GameStageView {...currentGameStage} />
        </div>
    );
};

export default Game;
