import React from "react";
import "components/ControlPanel/SearchBar.scss";

export class SearchBar extends React.Component {
    public render() {
        return (
            <div className="SearchBar">
                <input type="text" placeholder="看看我家在哪?"/>
                <button type="button"><img src="mylocation_grey.png" alt="my location"/></button>
            </div>
        );
    }
}