import type { Component, JSX } from "solid-js";

const Link: Component<
    JSX.AnchorHTMLAttributes<HTMLAnchorElement> & { children: JSX.Element }
> = (props) => {
    return (
        <a
            {...props}
            class="border-neutral-200 bg-white text-black dark:border-slate-800 dark:bg-slate-900 dark:text-white"
        >
            {props.children}
        </a>
    );
};

export default Link;
