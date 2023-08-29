const GuestCard = () => {
  return (
    <div className="bg-white rounded-3xl shadow-lg px-6 py-7">
      {/* Adults */}
      <div className="flex items-center justify-between gap-7 px-2 border-b-[1px] pb-5">
        <div>
          <h1 className="text-xl text-black">Adults</h1>
          <p className="text-gray-500">Ages 13 or above</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="px-2 border-[2px] rounded-full ">-</button>
          <p>{5}</p>
          <button className="px-2 border-[2px] rounded-full ">+</button>
        </div>
      </div>
      {/* children */}
      <div className="flex items-center justify-between gap-7 px-2 border-b-[1px] pb-5">
        <div>
          <h1 className="text-xl text-black">Children</h1>
          <p className="text-gray-500">Ages 2–12</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="px-2 border-[2px] rounded-full ">-</button>
          <p>{5}</p>
          <button className="px-2 border-[2px] rounded-full ">+</button>
        </div>
      </div>
      {/* Infants */}
      <div className="flex items-center justify-between gap-7 px-2 border-b-[1px] pb-5">
        <div>
          <h1 className="text-xl text-black">Infants</h1>
          <p className="text-gray-500">Under 2</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="px-2 border-[2px] rounded-full ">-</button>
          <p>{5}</p>
          <button className="px-2 border-[2px] rounded-full ">+</button>
        </div>
      </div>
    </div>
  );
};

export default GuestCard;
