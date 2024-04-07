import { Component, JSX } from "solid-js";
import { GameStage } from "@millie/domain/game/types";

const GameStageView: Component<{
    gameStage: GameStage;
    children: JSX.Element;
}> = (props) => {
    return (
        <div class="flex flex-col gap-y-4 text-slate-800">
            <div class="flex gap-x-2">
                <span>
                    <strong>Phase:</strong> {props.gameStage.order}
                </span>
                <span>
                    <strong>Price:</strong> {props.gameStage.price}
                </span>
            </div>
            <figure>
                <img
                    src="/hubert-urbanski-thinking.jpeg"
                    alt="Huber Urbański"
                    width={500}
                    height={400}
                />
            </figure>
            {props.children}
        </div>
    );
};

export default GameStageView;
