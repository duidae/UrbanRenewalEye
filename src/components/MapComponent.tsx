import React from 'react';
import {withGoogleMap, GoogleMap} from "react-google-maps"
import './MapComponent.css'

export class MapComponent extends React.Component {
    private static readonly TAIPEI = {lat: 25.038357847174, lng: 121.54770626982};
    private static readonly ZOOM_INITIAL = 13;
    
    render() {
        const Map = withGoogleMap(props => (
            <GoogleMap
                defaultCenter = {MapComponent.TAIPEI}
                defaultZoom = {MapComponent.ZOOM_INITIAL}
            >
            </GoogleMap>
        ));

        return (
            <Map
                containerElement={<div className="container"/>}
                mapElement={<div className="map"/>}
            />
        );
    }
}