import React, { useEffect } from "react";
import Header from "../../components/Header";
import News from "../../components/News";
import Dates from "../../components/Dates";
import Galleries from "../../components/Galleries";
import Videos from "../../components/Videos";
import Bio from "../../components/Bio";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";

import data from '../../data/data.yaml';

import "./index.scss";

function App() {

    useEffect(() => {
        console.log('data', data);
    });

    return (
        <div className="App">
            <Header />
            <Dates dates={data.dates}/>
            <News news={data.news}/>
            <Galleries galleries={data.galleries} />
            <Videos videos={data.videos}/>
            <Bio bio={data.bio} />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
