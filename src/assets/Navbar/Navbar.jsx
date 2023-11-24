import React, { useEffect, useState } from "react";

import { FaBarsStaggered } from "react-icons/fa6";

function Navbar() {
  //   const [count, setCount] = useState(0);

  return (
    <>
      <div className="py-7 px-8 flex justify-between shadow-md">
        <div>
          <h1>Hello</h1>
        </div>
        <div>
          <button>
            <FaBarsStaggered />
          </button>
        </div>
      </div>
      <div>
        <div className="flex flex-col p-16 gap-4" >
          <h1 className="font-bold text-2xl">YNW Melly</h1>
          <h5 className="">Rapper Artist</h5>
          <p className="">Jamell Maurice Demons, known professionally as YNW Melly, is an American rapper and singer from Gifford, Florida. He rose to fame in 2018 following the commercial release of his single "Murder on My Mind", a trap song which explores homicidal ideation.</p>
        </div>
        <div>
          
        </div>
      </div>
    </>
  );
}

export default Navbar;
