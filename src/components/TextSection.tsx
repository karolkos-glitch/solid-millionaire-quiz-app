import { Component, JSX, Show } from "solid-js";

const TextSection: Component<{
    title: string;
    content: JSX.Element;
    imgProps?: JSX.ImgHTMLAttributes<HTMLImageElement>;
    mode: "reversed" | "standard";
}> = (props) => {
    return (
        <article class="flex flex-col gap-y-8 my-16">
            <header class="py-4">
                <h2
                    class="text-2xl font-bold sm:text-4xl "
                    classList={{
                        "text-slate-800": props.mode === "standard",
                        "text-white": props.mode === "reversed",
                    }}
                >
                    {props.title}
                </h2>
            </header>
            <div class="grid gap-16 sm:grid-cols-2">
                <div
                    class="flex flex-col gap-y-12"
                    classList={{
                        "text-slate-800": props.mode === "standard",
                        "text-white": props.mode === "reversed",
                    }}
                >
                    {props.content}
                </div>
                <Show when={!!props.imgProps}>
                    <figure>
                        <img
                            class="object-fit rounded-sm"
                            {...props.imgProps}
                        />
                    </figure>
                </Show>
            </div>
        </article>
    );
};

export default TextSection;
