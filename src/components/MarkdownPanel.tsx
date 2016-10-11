/// <reference path="../../typings/index.d.ts" />

import * as React from "react";

interface Props extends StateProps, DispatchProps {

}

interface StateProps {
}

interface DispatchProps {
}

interface InnerState {
    html: string;
}

import * as marked from 'marked';

export class MarkdownPanel extends React.Component<Props, InnerState> {

    constructor(props: Props) {
        super(props);
        this.state = {
            html: ''
        };
    }

    onChange(a: any) {
        this.setState({
            html: marked(a.target.value)
        });
    }

    render() {
        return <div>
            Markdown:
            <textarea onChange={this.onChange.bind(this)} multiple={true}>
                {this.state.html}
            </textarea>
            Html:
            <div dangerouslySetInnerHTML={{__html: this.state.html}} />
        </div>;
    }
}
