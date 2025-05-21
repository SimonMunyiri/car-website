import React from "react";
import Logo from "../../assets/honda-blue.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";

// Navigation items
const NavMenu = [
  {
    id: 1,
    title: "Home",
    link: "#",
  },
  {
    id: 2,
    title: "About Us",
    link: "#",
  },
  {
    id: 3,
    title: "Bikes",
    link: "#",
  },
  {
    id: 4,
    title: "Cars",
    link: "#",
  },
];

const Navbar = () => {
  return (
    <>
      <main className="py-10 text-white">
        <div className="container">
          <div className="flex justify-between items-center">
            {/* Logo section */}
            <div>
              <img src={Logo} alt="" className="w-[80px] invert rounded " />
            </div>

            {/* Nav menu section */}
            <div className="hidden md:block">
              <ul className="flex gap-4">
                {NavMenu.map((menu) => (
                  <li key={menu.id}>
                    <a
                      href={menu.link}
                      className="px-4 uppercase inline-block rounded-md hover:bg-blue-900 p-3 duration-200 hover:shadow-[0px_0px_20px_8px_#d2e6ff]"
                    >
                      {menu.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Hamburger Menu */}
            <div className="flex items-center gap-6">
              <div className="bg-white/30 rounded h-[30px] w-[30px] flex items-center justify-center cursor-pointer p-2 hover:scale-110 duration-200">
                <GiHamburgerMenu />
              </div>

              <div className="bg-white/30 rounded h-[30px] w-[30px] flex items-center justify-center cursor-pointer p-2 hover:scale-110 duration-200">
                <FaSearch />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Navbar;
