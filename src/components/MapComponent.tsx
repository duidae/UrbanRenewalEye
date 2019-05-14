import React from 'react';
import './MapComponent.scss'

declare const google: any;

interface MapComponentProps {
    id: string
}

export class MapComponent extends React.Component<MapComponentProps> {
    private static readonly TAIPEI = {lat: 25.038357847174, lng: 121.54770626982};
    private static readonly ZOOM_INITIAL = 13;

    componentDidMount() {
        new google.maps.Map(document.getElementById(this.props.id), {
            center: MapComponent.TAIPEI,
            zoom: MapComponent.ZOOM_INITIAL
        });
    }

    render() {
        return (
            <div className="Map" id={this.props.id}/>
        );
    }
}