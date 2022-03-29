import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Context from "./context/Context";
import "./index.css";

ReactDOM.render(
	<Context>
		<App />
	</Context>,
	document.getElementById("root")
);
