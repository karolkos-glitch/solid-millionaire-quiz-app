import { Component } from "solid-js";
import Button from "@millie/components/Button";
import gameReactivity from "@millie/domain/game/gameReactivity";
import { Motion } from "solid-motionone";

const PrepareGame: Component = () => {
    const {
        userInGameState: [_, setUserInGameState],
    } = gameReactivity;

    return (
        <Motion.div
            class="flex flex-col items-center justify-center gap-y-4"
            initial={{
                opacity: 0.5,
            }}
            animate={{
                opacity: 1,
            }}
            transition={{
                delay: 0.75,
            }}
        >
            <h2 class="text-xl text-white">Choose trivia quiz</h2>
            <Button
                type="button"
                onClick={() => setUserInGameState(() => "PLAYING")}
            >
                African Capital Cities
            </Button>
        </Motion.div>
    );
};

export default PrepareGame;
