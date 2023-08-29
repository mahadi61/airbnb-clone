import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import DatePicker from "../Calender/Calender";

const NavbarFilter = () => {
  const [calenderOpen, setCalenderOpen] = useState(false);
  const openCalender = () => {
    setCalenderOpen(!calenderOpen);
  };

  return (
    <>
      <div className="h-32 flex flex-col items-center justify-end gap-2">
        <div className="flex gap-3">
          <p className=" font-semibold text-black cursor-pointer hover:text-gray-400">
            Stays
          </p>
          <p className="font-semibold text-black cursor-pointer hover:text-gray-400">
            Experience
          </p>
          <p className=" font-semibold text-black cursor-pointer hover:text-gray-400">
            Online Experience
          </p>
        </div>

        <div className="">
          <div className="border-[1px] w-full md:w-auto  rounded-full shadow-sm  transition cursor-pointer">
            <div className="flex flex-row items-center justify-between">
              <div className="text-sm font-semibold rounded-full hover:bg-slate-100  px-6 py-3 ">
                <div className="flex flex-col">
                  <label className="text-black">Where</label>
                  <input
                    className="text-gray-500 hover:bg-slate-100 border-none focus:outline-none "
                    type="text"
                    placeholder="Search destination"
                  />
                </div>
              </div>
              <div
                onClick={openCalender}
                className="hidden sm:block text-sm font-semibold rounded-full hover:bg-slate-100  px-6 py-3  flex-1 text-center"
              >
                <p>Check In</p>
                <p className="">dates</p>
              </div>
              <div
                onClick={openCalender}
                className="hidden sm:block text-sm font-semibold rounded-full hover:bg-slate-100  px-6 py-3  flex-1 text-center"
              >
                Checkout
                <p className="">dates</p>
              </div>
              <div className="text-sm pl-6 pr-2  rounded-full hover:bg-slate-100  px-6 py-3 flex flex-row items-center gap-3">
                <div className="hidden sm:block">
                  <p className="text-black">Who</p>Add Guests
                </div>
                <div className="flex justify-between items-center px-5 py-2 bg-rose-500 rounded-full text-white">
                  <BiSearch size={18} />
                  <p>Search</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            {calenderOpen && (
              <div className="absolute top-0 flex items-center justify-center bg-white">
                <DatePicker />
                <p className="font-semibold">To</p>
                <DatePicker />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarFilter;
