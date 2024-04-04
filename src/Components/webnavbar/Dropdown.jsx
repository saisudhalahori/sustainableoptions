import React, { useState } from "react";
import { aboutusDropdown } from "./NavItems";
import { Link, useNavigate } from "react-router-dom";
import "./Dropdown.scss";

function Dropdown() {
  const [dropdown, setDropdown] = useState(false);
  const navigate = useNavigate()

  return (
    <>
      <ul
        className={dropdown ? "about-submenu clicked" : "about-submenu"}
        onClick={() => setDropdown(!dropdown)}
      >
        {aboutusDropdown.map((item) => {
          return (
            <li key={item.id} className={item.cName}
              onClick={()=>navigate(`/about${item.path}`)}
            >
              <span
                
                className={item.cName}
                onClick={() => setDropdown(false)}
              >
                {item.title}
              </span>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Dropdown;