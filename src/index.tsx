/* @refresh reload */
import { render } from "solid-js/web";
import { Component, lazy } from "solid-js";
import { Route, Router } from "@solidjs/router";
import App from "@millie/components/App";
import "@millie/index.css";

const Home = lazy(() => import("@millie/pages/home"));
const Game = lazy(() => import("@millie/pages/game"));
const root = document.getElementById("root");

const GameWithLayout: Component = () => (
    <App>
        <Game />
    </App>
);

render(
    () => (
        <Router>
            <Route path="/game" component={GameWithLayout} />
            <Route path="/" component={Home} />
        </Router>
    ),
    root!,
);
