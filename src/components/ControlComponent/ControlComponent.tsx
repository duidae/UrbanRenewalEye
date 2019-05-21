import React from "react";
import {Header} from "components/ControlComponent/Header";
import {SearchBar} from "components/ControlComponent/SearchBar";
import "components/ControlComponent/ControlComponent.scss";

export const ControlComponent: React.FC = () => {
    return (
        <div className="ControlComponent">
            <Header/>
            <SearchBar/>
        </div>
    );
}