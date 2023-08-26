import { useEffect, useState } from "react";
import Container from "../../Shared/Container";
import CategoryBox from "./CategoryBox";
const Categories = ({ setCategoryName }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/allCategory")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

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
      </div>
    </Container>
  );
};

export default Categories;
