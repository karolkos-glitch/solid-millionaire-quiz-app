import { useNavigate } from "@solidjs/router";
import { Component, JSX } from "solid-js";

import "solid-devtools";
import gameReactivity from "@millie/domain/game/gameReactivity";

const App: Component<{ children: JSX.Element }> = (props) => {
    const navigate = useNavigate();
    const navigateToHomepage = () => {
        const [_, setUserInGameState] = gameReactivity.userInGameState;
        setUserInGameState(() => "RESET");
        navigate("/");
    };

    return (
        <>
            <main class="h-screen w-screen">
                <header class="flex items-center justify-center py-4">
                    <button type="button" onClick={navigateToHomepage}>
                        <h1 class="text-center text-xl  font-bold text-slate-800">
                            WHO WANTS TO BE A{" "}
                            <span class="text-yellow-600">MILLIONAIRE?</span>
                        </h1>
                    </button>
                </header>
                <section class="flex h-full flex-col items-center justify-center gap-y-4">
                    {props.children}
                </section>
            </main>
        </>
    );
};

export default App;
