import React from "react";
import "components/ControlPanel/Header.scss";

export class Header extends React.Component {
    public render() {
        return (
            <div className="Header">
                <img src="urlogo.png" alt="都市更新天眼通"/>
                <a href="https://www.facebook.com/urbanrenewaleye" target="_blank" rel="noopener noreferrer">
                    <img src="fblogo.png" alt="都市更新天眼通粉專"/>
                </a>
            </div>
        );
    }
}