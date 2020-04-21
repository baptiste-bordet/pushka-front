import React from "react";
import Header from "../../components/Header";
import News from "../../components/News";
import Dates from "../../components/Dates";
import Galleries from "../../components/Galleries";
import Footer from "../../components/Footer";

import "./index.scss";

function App() {
    return (
        <div className="App">
            <Header />
            <Dates />
            <News />
            <Galleries />
            <Footer />
        </div>
    );
}

export default App;
