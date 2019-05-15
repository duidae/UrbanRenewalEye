import React from 'react';
import "./SearchBox.scss"

declare const google: any;

interface SearchBoxProps {
    id: string
}

export class SearchBox extends React.Component<SearchBoxProps> {
    private searchBox: any;

    onPlaceChange = () => {
        const places = this.searchBox.getPlaces();

        if (places.length === 0) {
            return;
        }

        console.log(places);
    };

    constructor(props: SearchBoxProps) {
        super(props);

        const input = document.getElementById(this.props.id);
        const defaultBounds = new google.maps.LatLngBounds(
            new google.maps.LatLng(-33.8902, 151.1759),
            new google.maps.LatLng(-33.8474, 151.2631)
        );

        this.searchBox = new google.maps.places.SearchBox(input, {
            bounds: defaultBounds
        });
        this.searchBox.addListener('onPlaceChange', this.onPlaceChange);
    }

    render() {
        return (
            <input id={this.props.id} className="SearchBox" type="text" placeholder="看看我家在哪?"/>
        );
    }
}