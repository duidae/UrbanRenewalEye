import React, { useEffect } from "react";
import "components/MapComponent.scss";

declare const google: any;

interface MapComponentProps {
    id: string,
    enableSearchBox?: boolean
}

export const MapComponent: React.FC<MapComponentProps> = (props) => {
    const TAIPEI = {lat: 25.038357847174, lng: 121.54770626982};
    const ZOOM_INITIAL = 13;

    useEffect(() => {
        const map = new google.maps.Map(document.getElementById(props.id), {
            center: TAIPEI,
            zoom: ZOOM_INITIAL,
            mapTypeControl: false,
        });
        map.addListener('bounds_changed', () => {
        });
    });

    return (
        <div className="Map" id={props.id}/>
    );
}