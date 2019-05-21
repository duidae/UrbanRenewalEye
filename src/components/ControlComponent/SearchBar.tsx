import React, { useEffect } from "react";
import "components/ControlComponent/SearchBar.scss";

declare const google: any;

export const SearchBar: React.FC = () => {
    useEffect(() => {
        const searchBox = new google.maps.places.SearchBox(document.getElementById("searchbox"));
        searchBox.addListener('places_changed', () => {
            const places = searchBox.getPlaces();
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
        });
    });

    return (
        <div className="SearchBar">
            <input id="searchbox" type="text" placeholder="看看我家在哪?"/>
            <button type="button"><img src="mylocation_grey.png" alt="my location"/></button>
        </div>
    );
}