import { Component } from "solid-js";

import { Motion } from "solid-motionone";
import GameOptions from "./GameOptions";
import Button from "@millie/components/Button";
import gameReactivity from "@millie/domain/game/gameReactivity";

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
            <GameOptions
                items={[
                    <Button
                        type="button"
                        onClick={() => setUserInGameState(() => "PLAYING")}
                    >
                        African Capital Cities
                    </Button>,
                    <Button
                        type="button"
                        onClick={() => setUserInGameState(() => "PLAYING")}
                    >
                        Elden Ring Lore
                    </Button>,
                    <Button
                        type="button"
                        onClick={() => setUserInGameState(() => "PLAYING")}
                    >
                        Premier League Trivia
                    </Button>,
                ]}
            />
        </Motion.div>
    );
};

export default PrepareGame;
