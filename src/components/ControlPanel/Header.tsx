import React from "react";
import "components/ControlPanel/Header.scss";

export class Header extends React.Component {
    public render() {
        return (
            <div className="Header">
                <img src="urlogo.png"/>
                <a href="https://www.facebook.com/urbanrenewaleye" target="_blank">
                    <img src="fblogo.png"/>
                </a>
            </div>
        );
    }
}