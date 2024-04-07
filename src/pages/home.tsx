import { Component } from "solid-js";

import { useNavigate } from "@solidjs/router";
import gameReactivity from "@millie/domain/game/gameReactivity";
import BackgroundBeams from "@millie/components/BackgroundBeams";
import TextSection from "@millie/components/TextSection";
import { Motion } from "solid-motionone";
import EnterGameButton from "@millie/components/EnterGameButton";

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
                    <Motion.h1
                        initial={{
                            y: -40,
                            opacity: 0,
                        }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                            duration: 0.6,
                        }}
                        class="text-center text-4xl font-bold text-slate-800 sm:text-6xl md:text-8xl "
                    >
                        WHO WANTS TO BE <br />A{" "}
                        <span class="text-yellow-600">MILLIONAIRE?</span>
                    </Motion.h1>
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
                    <EnterGameButton type="button" onClick={navigateToGame}>
                        Enter the Hot Seat
                    </EnterGameButton>
                </Motion.div>
                <BackgroundBeams />
            </section>
            <section class="p-4 md:p-16">
                <TextSection
                    mode="standard"
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
                            <div class="flex items-center gap-x-2">
                                <p>Do not hesitate! Try and </p>
                                <EnterGameButton
                                    type="button"
                                    onClick={navigateToGame}
                                >
                                    Play the game
                                </EnterGameButton>
                            </div>
                        </>
                    }
                    imgProps={{
                        src: "/hubert-success-reaction.webp",
                        alt: "Huber Urbański",
                        width: 500,
                        height: 300,
                    }}
                />
            </section>
            <section class="bg-slate-800 p-4 md:p-16">
                <TextSection
                    mode="reversed"
                    title="Words from the author"
                    content={
                        <>
                            <p>
                                I created this app to train my Solid.js skills.
                            </p>
                            <h3 class="font-bold">Core tech:</h3>
                            <ul class="ml-4 list-disc">
                                <li>solid.js</li>
                                <li>@solidjs/router</li>
                                <li>tailwindcss</li>
                                <li>solid-motionone</li>
                            </ul>
                            <p>
                                Some UI components were inspired by{" "}
                                <a
                                    class="underline"
                                    href="https://ui.aceternity.com"
                                >
                                    Acernity UI
                                </a>
                                . Web app Design was generated with{" "}
                                <a
                                    class="underline"
                                    href="https://www.framer.com/"
                                >
                                    Framer.com
                                </a>
                            </p>
                            <p></p>
                        </>
                    }
                />
            </section>
        </main>
    );
};

export default Home;
