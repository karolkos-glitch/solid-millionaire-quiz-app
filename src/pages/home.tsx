import { Component } from "solid-js";

import Button from "@millie/components/Button";
import { useNavigate } from "@solidjs/router";
import gameReactivity from "@millie/domain/game/gameReactivity";

const Home: Component = () => {
    const navigate = useNavigate();
    const navigateToGame = () => {
        const [_, setUserInGameState] = gameReactivity.userInGameState;
        setUserInGameState("RESET");
        navigate("/game");
    };
    return (
        <main class="flex h-screen w-screen flex-col">
            <header class="flex h-[70%] items-center justify-center px-8">
                <h1 class="text-center text-8xl font-bold text-slate-800 ">
                    WHO WANTS TO BE <br />A{" "}
                    <span class="text-yellow-600">MILLIONAIRE?</span>
                </h1>
            </header>
            <div class="flex items-center justify-center">
                <Button type="button" onClick={navigateToGame}>
                    Enter the Hot Seat
                </Button>
            </div>
        </main>
    );
};

export default Home;
