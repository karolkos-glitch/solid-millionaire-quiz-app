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
        <Button type="button" onClick={navigateToGame}>
            Start
        </Button>
    );
};

export default Home;
