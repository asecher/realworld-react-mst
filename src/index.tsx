import * as React from "react";
import { render } from "react-dom";
import "antd/dist/antd.css";

import "./styles.css";
import App from "./components/app";

const rootElement = document.getElementById("root");
render(<App />, rootElement);
