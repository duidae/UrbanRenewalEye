import React from 'react';
import './MapComponent.scss'

declare const google: any;

interface MapComponentProps {
    id: string,
    enableSearchBox?: boolean
}

export class MapComponent extends React.Component<MapComponentProps> {
    private static readonly TAIPEI = {lat: 25.038357847174, lng: 121.54770626982};
    private static readonly ZOOM_INITIAL = 13;

    private map: any;

    componentDidMount() {
        this.map = new google.maps.Map(document.getElementById(this.props.id), {
            center: MapComponent.TAIPEI,
            zoom: MapComponent.ZOOM_INITIAL
        });

        if (this.props.enableSearchBox) {
            const input = document.getElementById(this.props.id+"searchbox");
            const defaultBounds = new google.maps.LatLngBounds(
                new google.maps.LatLng(-33.8902, 151.1759),
                new google.maps.LatLng(-33.8474, 151.2631)
            );

            const searchBox: any = new google.maps.places.SearchBox(input, {
                bounds: defaultBounds
            });
            this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(searchBox);
        }
    }

    render() {
        return (
            <div>
                {this.props.enableSearchBox ? <input id={this.props.id+"searchbox"} className="SearchBox" type="text" placeholder="看看我家在哪?"/> : ""}
                <div className="Map" id={this.props.id}/>
            </div>
        );
    }
}