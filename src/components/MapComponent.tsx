import React from 'react';
import GoogleMapReact from "google-map-react"
import {SearchBox} from "components/SearchBox"
import './MapComponent.scss'

export class MapComponent extends React.Component {
    private static readonly TAIPEI = {lat: 25.038357847174, lng: 121.54770626982};
    private static readonly ZOOM_INITIAL = 13;

    handleSearch = () => {
    };
    
    render() {
        return (
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyDWfXknzR5myhgKP-qkRwbWLMnqLaLjEP8' }}
                defaultCenter={MapComponent.TAIPEI}
                defaultZoom={MapComponent.ZOOM_INITIAL}
            >
                <SearchBox
                    placeholder={"Search location"}
                    onPlacesChanged={this.handleSearch}
                />
            </GoogleMapReact>
        );
    }
}