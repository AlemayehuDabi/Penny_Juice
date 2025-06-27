import logo from "../image/banner2.png";

export const CatagoriesItems = () => {
  return (
    <div className="min-h-3xl mt-10 flex items-center justify-center ">
      <div className="flex gap-6 items-center justify-center w-full">
        {/* Left Image */}
        <div className="rounded w-1/4 h-[34rem] border border-amber-400 transform hover:scale-105 transition duration-300">
          <img
            src={logo}
            alt="Category Left"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Two Stacked Center Images */}
        <div className="flex flex-col gap-6 w-1/4 h-[34rem]">
          <div className="w-full h-1/2 rounded  border border-amber-400 overflow-hidden transform hover:scale-105 transition duration-300">
            <img
              src={logo}
              alt="Category Center Top"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full h-1/2 rounded border border-amber-400 overflow-hidden transform hover:scale-105 transition duration-300">
            <img
              src={logo}
              alt="Category Center Bottom"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Image */}
        <div className="rounded w-1/4 h-[34rem] border border-amber-400 transform hover:scale-105 transition duration-300">
          <img
            src={logo}
            alt="Category Right"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};
