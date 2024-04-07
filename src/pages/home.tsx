import { Component } from "solid-js";

import Button from "@millie/components/Button";
import { useNavigate } from "@solidjs/router";
import gameReactivity from "@millie/domain/game/gameReactivity";
import BackgroundBeams from "@millie/components/BackgroundBeams";
import TextSection from "@millie/components/TextSection";
import { Motion } from "solid-motionone";

const Home: Component = () => {
    const navigate = useNavigate();
    const navigateToGame = () => {
        const [_, setUserInGameState] = gameReactivity.userInGameState;
        setUserInGameState("RESET");
        navigate("/game");
    };
    return (
        <main class="flex w-screen flex-col">
            <section class="relative mx-4 flex h-screen w-full flex-col items-center justify-center">
                <header class="flex h-[70%] items-center justify-center px-8">
                    <h1 class="text-center text-4xl font-bold text-slate-800 sm:text-6xl md:text-8xl ">
                        WHO WANTS TO BE <br />A{" "}
                        <span class="text-yellow-600">MILLIONAIRE?</span>
                    </h1>
                </header>
                <Motion.div
                    initial={{
                        opacity: 0.5,
                    }}
                    animate={{
                        opacity: 1,
                    }}
                    class="flex items-center justify-center"
                >
                    <Button type="button" onClick={navigateToGame}>
                        Enter the Hot Seat
                    </Button>
                </Motion.div>
                <BackgroundBeams />
            </section>
            <section class="m-4 md:m-16">
                <TextSection
                    title="Can You Take The Heat?"
                    content={
                        <>
                            <p>
                                The heat is on! It’s time to put your trivia
                                knowledge to the test in our digital rendition
                                of the classic game show. Think you’re up for
                                the challenge?
                            </p>
                            <p>
                                Prepare to wrestle with difficult questions, as
                                the pressure mounts. Each correct answer brings
                                you closer to that million. No room for bluffing
                                here!
                            </p>
                            <p>
                                With lifelines at your fingertips and a grand
                                prize waiting, it’s time to bring your A-game.
                                Are you ready to step into the hot seat?
                            </p>
                        </>
                    }
                />
            </section>
        </main>
    );
};

export default Home;
