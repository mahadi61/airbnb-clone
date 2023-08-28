import { useEffect, useState } from "react";
import Container from "../../Shared/Container";
import CategoryFilter from "../Filter/CategoryFilter";
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
        {isModalOpen && <CategoryFilter toggleModal={toggleModal} />}
      </div>
    </Container>
  );
};

export default Categories;
