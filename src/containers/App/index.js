import React from "react";
import Header from "../../components/Header";
import News from "../../components/News";
import Dates from "../../components/Dates";
import Galleries from "../../components/Galleries";
import "./index.scss";

function App() {
    return (
        <div className="App">
            <Header />
            <Dates />
            <News />
            <Galleries />
        </div>
    );
}

export default App;
