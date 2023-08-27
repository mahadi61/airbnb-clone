const PropertyType = () => {
  return (
    <>
      <div>
        <h1 className="text-2xl font-bold text-black my-3">Property type</h1>

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
            <p className="text-xl mt-3">House</p>
          </div>
          <div className="px-8 py-5 border border-gray-400 hover:border-black rounded-xl">
            <img
              src="https://a0.muscache.com/pictures/6f261426-2e47-4c91-8b1a-7a847da2b21b.jpg"
              alt=""
              className="w-7 h7"
            />
            <p className="text-xl mt-3">House</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PropertyType;
