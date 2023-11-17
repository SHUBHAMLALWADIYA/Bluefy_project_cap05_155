import { useState } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Slider from "./components/Slider"
import DrawerLeft from "./components/DrawerMenu";
import RecommandedProDuctContainer from "./components/recommandedProDuctContainer";
import FetchApiData from "./components/fetchApi";
import fetchApiData from "./components/fetchApi";
import HoverDropdown from "./components/dropDownHover";

function App() {
  

  return (
    <div className="blueFly">
      <Navbar />
      <div className="blackDiv">
        <p>
          <span className="spanWelcome">WELCOME TO BLUEFLY:</span> Luxury brands at discounted prices
        </p>
      </div>
      <Slider />
      <RecommandedProDuctContainer/>
     <HoverDropdown options={["jack",100,200,300,400,555,666,444,666,6111,585,88,44,88,88]} title={"menu"}/>
    </div>
  );
}

export default App;
