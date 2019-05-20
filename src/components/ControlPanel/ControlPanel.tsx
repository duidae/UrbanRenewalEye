import React from "react";
import {Header} from "components/ControlPanel/Header";
import {SearchBar} from "components/ControlPanel/SearchBar";
import "components/ControlPanel/ControlPanel.scss";

export class ControlPanel extends React.Component {
    public render() {
        return (
            <div className="ControlPanel">
                <Header/>
                <SearchBar/>
            </div>
        );
    }
}