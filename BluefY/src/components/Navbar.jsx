import "../componentsCSS/Navbar.css";
import cart from "../assets/cart.svg"
import user from "../assets/user.svg";
import liked from "../assets/liked.svg";
import search from "../assets/search.svg";
import DrawerLeft from "./DrawerMenu";
import HoverDropdown from "./dropDownHover";


function Navbar() {
  return (
    <>
      <div className="navBar">
        <div className="navDiv" >
          <div className="drawer"><DrawerLeft /></div>
          
          <img
            className="navCompanyTitle"
            src="https://s35545.pcdn.co/wp-content/uploads/2020/12/bluefly-logo-768x118.png"
            alt=""
          />
          
          <div className="sideButton">
            <a className="search" href="">
              <img src={search} alt="" />
              <p>SEARCH</p>
            </a>

            <a href="">
              <img src={user} alt="" />
            </a>
            <a href="">
              <img src={liked} alt="" />
            </a>
            <a href="">
              <img src={cart} alt="" />
            </a>
          </div>
          
          
        </div>
        <div className="productBar">
          <HoverDropdown options={["children","boys","adult","women","mens"]} title={"CLOATHING"}/>
          <HoverDropdown options={[""]} title={"SHOES"}/>
          <HoverDropdown options={[""]} title={"HANDBAGS"}/>
          <HoverDropdown options={[""]} title={"DESIGNERS"}/>
          <HoverDropdown options={[""]} title={"SUNGLASSES"}/>
          <HoverDropdown options={[""]} title={"JEWELRY & WATCHES"}/>
          <HoverDropdown options={[""]} title={"ACCESSORIES"}/>
          <HoverDropdown options={[""]} title={"UNDER $50"}/>

          
          <p className="red">CLEARANCE</p>
        </div>
      </div>
    </>
  );
}

export default Navbar;
