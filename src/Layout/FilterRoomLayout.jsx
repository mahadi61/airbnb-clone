import { Outlet } from "react-router-dom";
import NavbarFilter from "../Components/Filter/NavbarFilter";
import Navbar from "../Shared/Navbar/Navbar";

const FilterRoomLayout = () => {
  return (
    <>
      <div>
        <Navbar />
        <NavbarFilter />
        <Outlet />
      </div>
    </>
  );
};

export default FilterRoomLayout;
