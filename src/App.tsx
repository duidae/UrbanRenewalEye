import React from 'react';
import './App.scss';
import {MapComponent} from "components/MapComponent";
import {SearchBox} from "components/SearchBox";

const App: React.FC = () => {
    return (
        <div className="App">
            <SearchBox id="SearchBox"/>
            <MapComponent id="Map"/>
        </div>
    );
}

export default App;
