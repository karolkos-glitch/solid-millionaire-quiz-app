/* @refresh reload */
import { render } from "solid-js/web";
import { lazy } from "solid-js";
import { Route, Router } from "@solidjs/router";
import App from "@millie/components/App";
import "@millie/index.css";

const Home = lazy(() => import("@millie/pages/home"));
const Game = lazy(() => import("@millie/pages/game"));
const root = document.getElementById("root");

render(
    () => (
        <Router root={App}>
            <Route path="/game" component={Game} />
            <Route path="/" component={Home} />
        </Router>
    ),
    root!,
);
