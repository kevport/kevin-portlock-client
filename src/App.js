import React from "react";
import "./App.css";
import KPNavBar from "./containers/KP-NavBar";
import Routes from "./Routes";

function App(props) {
    return (
        <div className="App">
            <KPNavBar/>
            <Routes />
        </div>
    );
}

export default App;