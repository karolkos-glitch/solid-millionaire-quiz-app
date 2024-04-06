import type { GameResult } from "@millie/domain/game/types";
import { Component } from "solid-js";

const GameResult: Component<{
    score: number;
}> = (props) => {
    return (
        <div class="flex flex-col gap-y-4 bg-slate-400 px-8 py-4 ">
            <span>
                Last question was worth: <strong>{props.score}</strong>
            </span>
        </div>
    );
};

export default GameResult;
