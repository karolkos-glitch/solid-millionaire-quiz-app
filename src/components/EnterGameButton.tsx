import type { Component, JSX } from "solid-js";

const EnterGameButton: Component<
    JSX.ButtonHTMLAttributes<HTMLButtonElement> & { children: JSX.Element }
> = (props) => {
    return (
        <button class="relative p-[3px]" {...props}>
            <div class="absolute inset-0 rounded-lg bg-gradient-to-t from-slate-800 to-yellow-500" />
            <div class="group relative rounded-[6px] bg-black px-8 py-2 text-white transition duration-400 hover:bg-transparent">
                {props.children}
            </div>
        </button>
    );
};

export default EnterGameButton;
