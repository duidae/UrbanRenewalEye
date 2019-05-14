import React from 'react';
import PropTypes from 'prop-types';
import "./SearchBox.scss";
import ReactDOM from 'react-dom';

export class SearchBox extends React.Component {
    private searchBox: any;
    
    static propTypes = {
        placeholder: PropTypes.string,
        onPlacesChanged: PropTypes.func
    }

    onPlacesChanged = () => {
        /*
        if (this.props.onPlacesChanged) {
        this.props.onPlacesChanged(this.searchBox.getPlaces());
        }
        */
    }

    render() {
        return (
            <div className="SearchBox">
                <input ref="input" placeholder={"來去看看我家?"} type="text"/>
            </div>
        );
    }
    
    componentDidMount() {
        var input = ReactDOM.findDOMNode(this.refs.input);
        this.searchBox = new google.maps.places.SearchBox(input);
        this.searchBox.addListener('places_changed', this.onPlacesChanged);
      }
}