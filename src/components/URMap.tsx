import React from "react";
import {MapComponent} from "components/MapComponent";
import {ControlPanel} from "components/ControlPanel/ControlPanel";
import {Advertisement} from "components/Advertisement";
import {Legend} from "components/Legend";

export class URMap extends React.Component {
    public render() {
        return (
            <div>
                <MapComponent id="URMap" enableSearchBox={true}/>
                <ControlPanel/>
                <Legend/>
                <Advertisement/>
            </div>
        );
    }
}