import type { Component, JSX } from "solid-js";

const Button: Component<
    JSX.ButtonHTMLAttributes<HTMLButtonElement> & { children: JSX.Element }
> = (props) => {
    return (
        <button
            {...props}
            class="rounded-md border-neutral-200 bg-white p-4 text-black transition dark:border-slate-800 dark:bg-slate-900 dark:text-white hover:dark:bg-slate-700"
        >
            {props.children}
        </button>
    );
};

export default Button;
