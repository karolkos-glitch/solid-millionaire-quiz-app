import Button from "@millie/components/Button";
import GameResult from "@millie/components/game/GameResult";
import gameReactivity from "@millie/domain/game/gameReactivity";
import { Component } from "solid-js";

const GameWon: Component = () => {
    const {
        userInGameState: [_, setUserInGameState],
        result: [getResult],
    } = gameReactivity;

    return (
        <>
            {" "}
            Win!
            <GameResult score={getResult().score} />
            <Button
                type="button"
                onClick={() => setUserInGameState(() => "RESET")}
            >
                Try to win again!!!
            </Button>
        </>
    );
};

export default GameWon;
