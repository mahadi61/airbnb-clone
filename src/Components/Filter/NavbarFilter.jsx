import { BiSearch } from "react-icons/bi";

const NavbarFilter = () => {
  return (
    <>
      <div className="h-28 flex flex-col items-center justify-end gap-2">
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
          <div className="border-[1px] w-full md:w-auto py-2 rounded-full shadow-sm  transition cursor-pointer">
            <div className="flex flex-row items-center justify-between">
              <div className="text-sm font-semibold ">
                <div className=" bg-white flex flex-col">
                  <label className="text-black">Where</label>
                  <input
                    className="text-gray-500 border-none cursor-pointer "
                    type="text"
                    placeholder="Search destination"
                  />
                </div>
              </div>
              <div className="hidden sm:block text-sm font-semibold  px-6 border-x-[1px] flex-1 text-center">
                <p>Check In</p>
                <p className="">Add dates</p>
              </div>
              <div className="hidden sm:block text-sm font-semibold  px-6 border-x-[1px] flex-1 text-center">
                Check In
              </div>
              <div className="text-sm pl-6 pr-2 text-gray-600 flex flex-row items-center gap-3">
                <div className="hidden sm:block">
                  <p className="text-black">Who</p>Add Guests
                </div>
                <div className="p-2 bg-rose-500 rounded-full text-white">
                  <BiSearch size={18} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarFilter;
