import { RouteSectionProps } from "@solidjs/router";
import { Component } from "solid-js";

const App: Component<RouteSectionProps> = (props) => {
    return (
        <>
            <main class="h-screen w-screen">
                <h1 class="text-center text-3xl font-bold underline">
                    <a href="/">Who Wants to Be a Millionaire?</a>
                </h1>
                <section class="flex h-full flex-col items-center justify-center gap-y-4">
                    {props.children}
                </section>
            </main>
        </>
    );
};

export default App;
