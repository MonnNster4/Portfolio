import React, { useEffect, useState } from "react";
import "./App.css";
import { FaBarsStaggered } from "react-icons/fa6";

function Navbar() {
  //   const [count, setCount] = useState(0);

  return (
    <>
      <div className="w-full py-9">
        <div>
          <h1>Mon</h1>
        </div>
        <div>
          <button>
            <FaBarsStaggered />
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
