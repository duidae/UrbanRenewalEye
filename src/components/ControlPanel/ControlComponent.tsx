import React from "react";
import {Header} from "components/ControlPanel/Header";
import {SearchBar} from "components/ControlPanel/SearchBar";
import "components/ControlPanel/ControlComponent.scss";

export const ControlComponent: React.FC = () => {
    return (
        <div className="ControlComponent">
            <Header/>
            <SearchBar/>
        </div>
    );
}