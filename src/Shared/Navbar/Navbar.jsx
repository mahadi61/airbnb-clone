import { useState } from "react";
import { Link } from "react-router-dom";
import Container from "../Container";
import MenuDropDown from "./MenuDropDown";
import Search from "./Search";
import NavbarFilter from "../../Components/Filter/NavbarFilter";

const Navbar = () => {
  const [openFilter, setOpenFilter] = useState(false);
  return (
    <div>
      <div className="fixed w-full bg-white z-50 shadow-sm">
        <div className="py-4 border-b-[1px]">
          <Container>
            <div
              className={`flex flex-row  ${
                openFilter ? "items-start" : "items-center"
              } justify-between gap-3 md:gap-0`}
            >
              {/* logo here */}
              <Link to="/" className="flex items-center">
                <img
                  className="hidden md:block"
                  src="./favicon.png"
                  alt="logo"
                  width="45"
                  height="45"
                />
                <p className="text-2xl font-bold text-[#FF385C]">airbnb</p>
              </Link>
              {openFilter ? (
                <NavbarFilter />
              ) : (
                <Search setOpenFilter={setOpenFilter} />
              )}

              <MenuDropDown />
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
