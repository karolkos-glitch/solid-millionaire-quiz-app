import type { Component, JSX } from "solid-js";

const Button: Component<
    JSX.ButtonHTMLAttributes<HTMLButtonElement> & { children: JSX.Element }
> = (props) => {
    return (
        <button
            {...props}
            class="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
        >
            {props.children}
        </button>
    );
};
export default Button;
