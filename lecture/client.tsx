import * as React from "react";
import * as ReactDOM from "react-dom";
import { hot } from "react-hot-loader";

// import GuGuDan from "./GuGuDan";
import WordRelay from "./WordRelayClass";

const Hot = hot(WordRelay);

ReactDOM.render(<WordRelay />, document.querySelector("#root"));
