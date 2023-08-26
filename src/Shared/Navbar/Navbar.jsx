import { Link } from "react-router-dom";
import Container from "../Container";
import MenuDropDown from "./MenuDropDown";
import Search from "./Search";

const Navbar = () => {
  return (
    <div>
      <div className="fixed w-full bg-white z-10 shadow-sm">
        <div className="py-4 border-b-[1px]">
          <Container>
            <div className="flex flex-row  items-center justify-between gap-3 md:gap-0">
              {/* logo here */}
              <Link to="/">
                <img
                  className="hidden md:block"
                  src="./logo.png"
                  alt="logo"
                  width="100"
                  height="100"
                />
              </Link>
              <Search />
              <MenuDropDown />
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
