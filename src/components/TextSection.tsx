import { Component, JSX } from "solid-js";

const TextSection: Component<{
    title: string;
    content: JSX.Element;
}> = (props) => {
    return (
        <article class="flex flex-col gap-y-4">
            <header class="py-4">
                <h2 class="text-4xl font-bold text-slate-800">{props.title}</h2>
            </header>
            <div class="grid gap-4 sm:grid-cols-2">
                <div class="flex flex-col gap-y-4 text-slate-800">
                    {props.content}
                </div>
                <figure>
                    <img
                        class="object-fit rounded-sm"
                        src="/hubert-success-reaction.webp"
                        alt="Huber Urbański"
                        width={500}
                        height={300}
                    />
                </figure>
            </div>
        </article>
    );
};

export default TextSection;
