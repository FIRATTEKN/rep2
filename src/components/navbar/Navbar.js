import React, { useState } from "react";
import "./Navbar.css";

function Navbar(props) {
  const [name, setname] = useState();
  const setData = (name) => {
    props.getName(name);
  };
  return (
    <div className="VWYX_navbar">
      <div className="VWYX_navbar_brand">GitHub</div>

      <div className="VWYX_navbar_right-side">
        <div
          onClick={() => {
            props.getRandomProfile();
          }}
          className="VWYX_title_v1 VWYX_btn"
        >
          Fetch Random Pofile
        </div>
        <div className="VWYX_search_btn">
          <div
            onClick={() => {
              setData(name);
            }}
            className="VWYX_title_v1"
          >
            Fetch Your Profile
          </div>
          <input
            onChange={(event) => {
              setname(event.target.value);
            }}
            className="VWYX_input"
            placeholder="Github User Name"
          ></input>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
