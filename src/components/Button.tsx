import type { Component, JSX } from "solid-js";

const Button: Component<
    JSX.ButtonHTMLAttributes<HTMLButtonElement> & { children: JSX.Element }
> = (props) => {
    return (
        <button
            {...props}
            class="border-neutral-200 bg-white text-black dark:border-slate-800 dark:bg-slate-900 dark:text-white"
        >
            {props.children}
        </button>
    );
};
export default Button;
