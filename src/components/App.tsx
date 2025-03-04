import { useNavigate } from "@solidjs/router";
import { Component, JSX } from "solid-js";
import { Motion } from "solid-motionone";
import gameReactivity from "@millie/domain/game/gameReactivity";
import LampContainer from "./LampContainer";

const App: Component<{ children: JSX.Element }> = (props) => {
    const navigate = useNavigate();
    const navigateToHomepage = () => {
        const [_, setUserInGameState] = gameReactivity.userInGameState;
        setUserInGameState(() => "RESET");
        navigate("/");
    };

    return (
        <main class="flex h-screen w-screen flex-col bg-slate-950">
            <Motion.header
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    delay: 0.75,
                }}
                class="z-50 flex items-center justify-center py-4"
            >
                <button type="button" onClick={navigateToHomepage}>
                    <h1 class="text-center text-xl font-bold text-white">
                        WHO WANTS TO BE A{" "}
                        <span class="text-yellow-600">MILLIONAIRE?</span>
                    </h1>
                </button>
            </Motion.header>
            <LampContainer>
                <section class="flex h-full flex-col items-center justify-center gap-y-4">
                    {props.children}
                </section>
            </LampContainer>
        </main>
    );
};

export default App;
