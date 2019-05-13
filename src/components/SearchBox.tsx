import React from 'react';
import PropTypes from 'prop-types';
import "./SearchBox.scss";

export class SearchBox extends React.Component {
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
                <input ref="input" {...this.props} type="text"/>
            </div>
        );
    }
}