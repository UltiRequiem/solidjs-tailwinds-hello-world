import { render } from "solid-js/web";
import "tailwindcss/tailwind.css";

import "./global.css";
import App from "./App";

render(() => <App />, document.getElementById("root") as HTMLElement);
