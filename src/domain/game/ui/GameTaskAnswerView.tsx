import { Component } from "solid-js";
import { GameTaskAnswer } from "../types";
import Button from "@millie/components/Button";

const GameTaskAnswerView: Component<GameTaskAnswer> = (props) => {
    return <Button type="button">{props.value}</Button>;
};

export default GameTaskAnswerView;
