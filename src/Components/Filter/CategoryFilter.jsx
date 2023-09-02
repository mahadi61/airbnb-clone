import { Slider } from "@mui/material";
import { FaXmark } from "react-icons/fa6";

const CategoryFilter = ({ toggleModal }) => {
  return (
    <div>
      <div className="fixed top-0 left-0 w-full h-full px-4 bg-[#0000009a]  flex items-center justify-center z-50 ">
        <div className=" relative w-[700px] h-[500px] bg-white opacity-100 rounded-lg shadow-lg ">
          {/* modal top */}
          <div className=" flex justify-center  borde p-4">
            <button onClick={toggleModal}>
              <FaXmark />
            </button>
            <div className="grow">
              <p className="text-center">Filters</p>
            </div>
          </div>

          {/* modal filter */}
          <form className="p-4 h-[380px] overflow-y-auto">
            <h1 className="text-2xl font-bold text-black my-3">
              Type of place
            </h1>
            <div>
              <div className="flex justify-between items-center">
                <div className="flex  border-2 rounded-xl">
                  <div className="p-4 hover:bg-black hover:text-white shadow-inner cursor-pointer rounded-s-xl">
                    <p>Any type</p>
                    <p>$68 avg.</p>
                  </div>
                  <div className="p-4 hover:bg-black border-x-2 hover:text-white cursor-pointer shadow-inner">
                    <p>Room</p>
                    <p>$45 avg.</p>
                  </div>
                  <div className="p-4 hover:bg-black hover:text-white cursor-pointer shadow-inner rounded-e-xl">
                    <p>Entire home</p>
                    <p>$85 avg.</p>
                  </div>
                </div>
                <div>{/* right side image */}</div>
              </div>
              {/* modal text */}
              <p className="my-3 w-96 font-semibold">
                Your own room in a home, plus access to shared spaces. Average
                nightly prices dont include fees or taxes.
              </p>
            </div>
            {/* price range */}
            <div>
              <h1 className="text-2xl font-bold text-black my-3">
                Price range
              </h1>
              <Slider
                getAriaLabel={() => "Price range"}
                // value={value}
                // onChange={handleChange}
                valueLabelDisplay="auto"
                // getAriaValueText={valuetext}
              />
              <div>
                <div className="flex items-center justify-between gap-3">
                  <div className="py-2 px-3 border rounded-xl w-1/2">
                    <label>Minimum</label>
                    <div className="flex items-center gap-1">
                      <p>$</p>
                      <input type="text" className=" p-1" defaultValue={10} />
                    </div>
                  </div>
                  <div className="py-2 px-3 border rounded-xl w-1/2">
                    <label>Maximum</label>
                    <div className="flex items-center gap-1">
                      <p>$</p>
                      <input
                        type="text"
                        className=" p-1 "
                        defaultValue={"150+"}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Property type */}
            <div>
              <h1 className="text-2xl font-bold text-black my-3">
                Property type
              </h1>

              <div className="flex justify-start gap-3">
                <div className="px-8 py-5 border border-gray-400 hover:border-black rounded-xl">
                  <img
                    src="https://a0.muscache.com/pictures/4d7580e1-4ab2-4d26-a3d6-97f9555ba8f9.jpg"
                    alt=""
                    className="w-7 h7"
                  />
                  <p className="text-xl mt-3">House</p>
                </div>
                <div className="px-8 py-5 border border-gray-400 hover:border-black rounded-xl">
                  <img
                    src="https://a0.muscache.com/pictures/21cfc7c9-5457-494d-9779-7b0c21d81a25.jpg"
                    alt=""
                    className="w-7 h7"
                  />
                  <p className="text-xl mt-3">Apartment</p>
                </div>
                <div className="px-8 py-5 border border-gray-400 hover:border-black rounded-xl">
                  <img
                    src="https://a0.muscache.com/pictures/6f261426-2e47-4c91-8b1a-7a847da2b21b.jpg"
                    alt=""
                    className="w-7 h7"
                  />
                  <p className="text-xl mt-3">Guesthouse</p>
                </div>
              </div>
            </div>
            {/* bed and bathrooms */}
            <div>
              <h1 className="text-2xl font-bold text-black my-3">
                Beds and bathrooms
              </h1>
              <h1 className="text-xl font-semibold text-black my-3">Beds</h1>
              <div>
                <ul className="flex gap-2 my-4">
                  {["Any", 1, 2, 3, 4, 5, 6, 7, 8].map((n, i) => (
                    <li
                      key={i}
                      className="hover:bg-black hover:text-white border border-gray-300 px-5 py-2 rounded-3xl cursor-pointer"
                      value={n}
                    >
                      {n}
                    </li>
                  ))}
                </ul>
                <h1 className="text-xl font-semibold text-black my-3">
                  Bathrooms
                </h1>

                <ul className="flex gap-2 my-4">
                  {["Any", 1, 2, 3, 4, 5, 6, 7, 8].map((n, i) => (
                    <li
                      key={i}
                      className="hover:bg-black hover:text-white border border-gray-300 px-5 py-2 rounded-3xl cursor-pointer"
                      value={n}
                    >
                      {n}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </form>

          {/* modal bottom */}
          <div className=" absolute bottom-0 left-0 w-full flex justify-between  shadow-lg p-4">
            <button className="underline font-bold">Clear All</button>
            <button className="px-4 py-3 bg-black text-white rounded-xl font-semibold">
              Show Rooms
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryFilter;
