const CategoryBox = ({ label, icon }) => {
  // const [params] = useSearchParams();

  // const navigate = useNavigate();
  // const handleClick = () => {
  //   let currentQuery = {};
  //   if (params) {
  //     currentQuery = qs.parse(params.toString());
  //   }
  //   const updatedQuery = {
  //     ...currentQuery,
  //     category: label,
  //   };

  //   const url = qs.stringifyUrl(
  //     {
  //       url: "/",
  //       query: updatedQuery,
  //     },
  //     { skipNull: true }
  //   );

  //   navigate(url);
  // };
  const selected = false;
  return (
    <div
      // onClick={handleClick}
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
