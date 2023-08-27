const PriceRange = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-black my-3">Price range</h1>
      <div>
        <form className="flex items-center justify-between gap-3">
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
              <input type="text" className=" p-1" defaultValue={"150+"} />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PriceRange;
