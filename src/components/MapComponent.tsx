import React from "react";
import "components/MapComponent.scss";
import "components/ControlPanel/SearchBox.scss";

declare const google: any;

interface MapComponentProps {
    id: string,
    enableSearchBox?: boolean
}

export class MapComponent extends React.Component<MapComponentProps> {
    private static readonly TAIPEI = {lat: 25.038357847174, lng: 121.54770626982};
    private static readonly ZOOM_INITIAL = 13;

    private map: any;
    private searchBox: any;

    private onBoundsChange = () => {
        this.searchBox.setBounds(this.map.getBounds());
    };

    private onPlaceChange = () => {
        const places = this.searchBox.getPlaces();

        if (places.length === 0) {
            return;
        }

        // For each place, get the icon, name and location.
        let bounds = new google.maps.LatLngBounds();
        places.forEach((place: any) => {
            if (!place.geometry) {
                console.log("Returned place contains no geometry");
                return;
            }

            if (place.geometry.viewport) {
                // Only geocodes have viewport.
                bounds.union(place.geometry.viewport);
            } else {
                bounds.extend(place.geometry.location);
            }
        });
        this.map.fitBounds(bounds);
    };

    componentDidMount() {
        this.map = new google.maps.Map(document.getElementById(this.props.id), {
            center: MapComponent.TAIPEI,
            zoom: MapComponent.ZOOM_INITIAL,
            mapTypeControl: false,
        });

        if (this.props.enableSearchBox) {
            const input = document.getElementById(this.props.id+"-searchbox");

            // TODO: move searchBox to store
            this.searchBox = new google.maps.places.SearchBox(input);
            //this.map.controls[google.maps.ControlPosition.TOP_CENTER].push(this.searchBox);

            this.map.addListener('bounds_changed', this.onBoundsChange);
            this.searchBox.addListener('places_changed', this.onPlaceChange);
        }
    }

    render() {
        return (
            <div className="Map" id={this.props.id}/>
        );
    }
}