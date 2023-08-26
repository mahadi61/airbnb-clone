import { useState } from "react";
import Categories from "../../Components/Categories/Categories";
import Rooms from "../../Components/Rooms/Rooms";

const Home = () => {
  const [categoryName, setCategoryName] = useState("all");

  return (
    <div>
      <Categories setCategoryName={setCategoryName} />
      <Rooms categoryName={categoryName} />
    </div>
  );
};

export default Home;
