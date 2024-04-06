import type { Component, JSX } from "solid-js";

const Link: Component<
    JSX.AnchorHTMLAttributes<HTMLAnchorElement> & { children: JSX.Element }
> = (props) => {
    return (
        <a
            {...props}
            class="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
        >
            {props.children}
        </a>
    );
};

export default Link;
