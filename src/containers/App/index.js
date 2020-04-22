import React from "react";
import Header from "../../components/Header";
import News from "../../components/News";
import Dates from "../../components/Dates";
import Galleries from "../../components/Galleries";
import Videos from "../../components/Videos";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";

import "./index.scss";

function App() {
    return (
        <div className="App">
            <Header />
            <Dates />
            <News />
            <Galleries />
            <Videos />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
