import React, { useState } from "react";
import { data } from "../restApi.json";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <>
     <nav>
  <div className="logo">Twiggy</div>
  <div className={show ? "navLinks showmenu" : "navLinks"}>
    <div className="links">
      {data[0].navbarLinks.map((element) => (
        <Link
          to={element.link} // element.link must match the id of the target section
          spy={true}
          smooth={true}
          duration={500}
          offset={-70} // This can help if you have a fixed header
          key={element.id}
        >
          {element.title}
        </Link>
      ))}
    </div>
    <button className="menuBtn">OUR MENU</button>
  </div>
  <div className="hamburger" onClick={() => setShow(!show)}>
    <GiHamburgerMenu />
  </div>
</nav>

    </>
  );
};

export default Navbar;