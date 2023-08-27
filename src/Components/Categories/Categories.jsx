import { useEffect, useState } from "react";
import { FaXmark } from "react-icons/fa6";
import Container from "../../Shared/Container";
import CategoryBox from "./CategoryBox";
const Categories = ({ setCategoryName }) => {
  const [categories, setCategories] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetch("https://airbnb-clone-server-ruby.vercel.app/allCategory")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <Container>
      <div className="pt-24 flex flex-row items-center justify-center overflow-x-auto">
        {categories.map((item) => (
          <CategoryBox
            label={item.label}
            icon={item.icon}
            key={item._id}
            // selected={category === item.label}
            setCategoryName={setCategoryName}
          />
        ))}
        <button
          onClick={toggleModal}
          className="px-4 py-3 rounded-xl shadow-lg border"
        >
          Filters
        </button>
        {isModalOpen && (
          <div className="fixed top-0 left-0 w-full h-full px-4 bg-[#0000009a]  flex items-center justify-center z-10 ">
            <div className=" relative w-[700px] h-[500px] bg-white opacity-100 rounded-lg shadow-lg">
              {/* modal top */}
              <div className=" flex justify-center  shadow-lg p-4">
                <button onClick={toggleModal}>
                  <FaXmark />
                </button>
                <div className="grow">
                  <p className="text-center">Filters</p>
                </div>
              </div>

              {/* modal filter */}
              <div className="p-4">
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
                    Your own room in a home, plus access to shared spaces.
                    Average nightly prices dont include fees or taxes.
                  </p>
                </div>
              </div>

              {/* modal bottom */}
              <div className=" absolute bottom-0 left-0 w-full flex justify-between  shadow-lg p-4">
                <button className="underline font-bold">Clear All</button>
                <button className="px-4 py-3 bg-black text-white rounded-xl font-semibold">
                  Show Rooms
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </Container>
  );
};

export default Categories;
