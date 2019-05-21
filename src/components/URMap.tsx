import React from "react";
import {MapComponent} from "components/MapComponent";
import {ControlComponent} from "components/ControlPanel/ControlComponent";
import {ADComponent} from "components/ADComponent";
import {LegendComponent} from "components/LegendComponent";

export const URMap: React.FC = () => {
    return (
        <div>
            <MapComponent id="URMap" enableSearchBox={true}/>
            <ControlComponent/>
            <LegendComponent/>
            <ADComponent/>
        </div>
    );
}