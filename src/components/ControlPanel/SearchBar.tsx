import React from "react";
import "components/ControlPanel/SearchBar.scss";

export class SearchBar extends React.Component {
    public render() {
        return (
            <div className="SearchBar">
                <input type="text"/>
            </div>
        );
    }
}