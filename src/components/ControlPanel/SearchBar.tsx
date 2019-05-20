import React from "react";
import "components/ControlPanel/SearchBar.scss";

declare const google: any;

export class SearchBar extends React.Component {
    private searchBox: any;

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
                bounds.union(place.geometry.viewport);
            } else {
                bounds.extend(place.geometry.location);
            }
        });
        //this.map.fitBounds(bounds);
    };

    componentDidMount() {
        this.searchBox = new google.maps.places.SearchBox(document.getElementById("searchbox"));
        this.searchBox.addListener('places_changed', this.onPlaceChange);
    }

    public render() {
        return (
            <div className="SearchBar">
                <input id="searchbox" type="text" placeholder="看看我家在哪?"/>
                <button type="button"><img src="mylocation_grey.png" alt="my location"/></button>
            </div>
        );
    }
}