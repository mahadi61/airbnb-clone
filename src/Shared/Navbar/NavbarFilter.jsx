const NavbarFilter = () => {
  return (
    <>
      <div>
        <div className="bg-slate-400 rounded-3xl">
          <div className="rounded-3xl bg-white flex flex-col">
            <label className="text-black">Where</label>
            <input
              className="text-gray-500 border-none border-white pe-8"
              type="text"
              placeholder="Search destination"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarFilter;
