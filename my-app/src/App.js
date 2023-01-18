import logo from './logo.svg';
import './App.css';
import Home from './component/Home/Home';
import Navs from "./component/Navs/Navs";

import React, { Fragment } from "react";

function App() {
  return (
    <div className="App">
    <Fragment >
        <Navs />
        <Home />
        </Fragment>    </div>
  );
}

export default App;
