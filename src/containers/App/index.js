import React from "react";
import Nav from "../../components/Nav";
import Banner from "../../components/Banner";
import Header from "../../components/Header";
import Bio from "../../components/Bio";
import News from "../../components/News";
import "./index.scss";

function App() {
    return (
        <div className="App">
            <Header />
            <News />
            <Bio />
        </div>
    );
}

export default App;
