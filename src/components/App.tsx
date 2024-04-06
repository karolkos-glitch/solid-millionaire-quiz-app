import { RouteSectionProps, useNavigate } from "@solidjs/router";
import { Component } from "solid-js";

import "solid-devtools";
import gameReactivity from "@millie/domain/game/gameReactivity";

const App: Component<RouteSectionProps> = (props) => {
    const navigate = useNavigate();
    const navigateToHomepage = () => {
        const [_, setUserInGameState] = gameReactivity.userInGameState;
        setUserInGameState(() => "RESET");
        navigate("/");
    };

    return (
        <>
            <main class="h-screen w-screen">
                <h1 class="text-center text-3xl font-bold underline">
                    <button type="button" onClick={navigateToHomepage}>
                        Who Wants to Be a Millionaire?
                    </button>
                </h1>
                <section class="flex h-full flex-col items-center justify-center gap-y-4">
                    {props.children}
                </section>
            </main>
        </>
    );
};

export default App;
