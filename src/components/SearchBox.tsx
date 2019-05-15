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
        this.searchBox = new google.maps.places.SearchBox(document.getElementById(this.props.id));
        this.searchBox.addListener('onPlaceChange', this.onPlaceChange);
    }

    render() {
        return (
            <input id={this.props.id} className="SearchBox" type="text" placeholder="看看我家在哪?"/>
        );
    }
}