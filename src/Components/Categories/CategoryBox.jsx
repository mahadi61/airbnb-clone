import { useState } from "react";

const CategoryBox = ({ label, icon, setCategoryName }) => {
  const [selected, setSelected] = useState(false);

  const handleClick = () => {
    setCategoryName(label);
    setSelected(true);
  };

  return (
    <div
      onClick={handleClick}
      className={`
        flex 
        flex-col 
        items-center 
        justify-center 
        gap-2
        p-3
        border-b-2
        hover:text-neutral-800
        transition
        cursor-pointer
        ${
          selected
            ? "border-b-neutral-800 text-neutral-800"
            : "border-transparent text-neutral-500"
        }
     
      `}
    >
      <img src={icon} alt="" className="w-10 h-10" />

      <div className="text-sm font-medium">{label}</div>
    </div>
  );
};

export default CategoryBox;
