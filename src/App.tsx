import React from 'react';
import './App.scss';
import {MapComponent} from "components/MapComponent";

const App: React.FC = () => {
    return (
        <div className="App">
            <MapComponent id="URMap" enableSearchBox={true}/>
        </div>
    );
}

export default App;
