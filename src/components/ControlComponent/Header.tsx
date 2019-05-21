import React from "react";
import "components/ControlComponent/Header.scss";

export const Header: React.FC = () => {
    return (
        <div className="Header">
            <img src="eye.png" alt="都市更新天眼通"/>
            <p>都市更新天眼通</p>
            <p>台北市都更地圖</p>
            <a href="https://www.facebook.com/urbanrenewaleye" target="_blank" rel="noopener noreferrer">
                <img src="fblogo.png" alt="都市更新天眼通粉絲專頁"/>
            </a>
        </div>
    );
}