/// <reference path="../typings/index.d.ts" />

import * as React from "react";
import * as ReactDOM from "react-dom";

import {MarkdownPanel} from './components/MarkdownPanel';

ReactDOM.render(
    <div>
        <MarkdownPanel />
    </div>,
    document.getElementById("reactRoot")
);