import { useRef, useState } from "react";
import { BiSearch } from "react-icons/bi";
import DatePicker from "../Calender/Calender";
import GuestCard from "../GuestCard/GuestCard";

const NavbarFilter = () => {
  const [calenderOpen, setCalenderOpen] = useState(false);
  const [openGuest, setOpenGuest] = useState(false);
  const [place, setPlace] = useState("");
  const [adults, setAdult] = useState(0);
  const [childrenData, setChildrenData] = useState(0);
  const [infants, setInfants] = useState(0);

  const calender = useRef(null);
  const openCalender = () => {
    setCalenderOpen(!calenderOpen);
  };
  const openGuestHandle = () => {
    setOpenGuest(!openGuest);
  };

  // // Function to close the element when a click is detected outside of it
  // const handleClickOutside = (event) => {
  //   if (calender.current && !calender.current.contains(event.target)) {
  //     setCalenderOpen(false);
  //   }
  // };

  // Attach click event listener to the document when the component mounts
  // useEffect(() => {
  //   if (calenderOpen) {
  //     document.addEventListener("click", handleClickOutside);
  //   } else {
  //     document.removeEventListener("click", handleClickOutside);
  //   }

  //   // Cleanup the event listener when the component unmounts
  //   return () => {
  //     document.removeEventListener("click", handleClickOutside);
  //   };
  // }, [calenderOpen]);

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
                    name="place"
                    onBlur={() => setPlace(event.target.value)}
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
              <div
                onClick={openGuestHandle}
                className="text-sm pl-6 pr-2  rounded-full hover:bg-slate-100  px-6 py-3 flex flex-row items-center gap-3"
              >
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
              <div
                ref={calender}
                className="absolute top-0 flex items-center justify-center bg-white"
              >
                <DatePicker />
                <p className="font-semibold">To</p>
                <DatePicker />
              </div>
            )}
            {openGuest && (
              <div className="absolute top-0 right-0">
                <GuestCard
                  adults={adults}
                  setAdult={setAdult}
                  childrenData={childrenData}
                  setChildrenData={setChildrenData}
                  infants={infants}
                  setInfants={setInfants}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarFilter;
