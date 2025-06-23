import logo from "../image/download-1.png";

export default function Hero() {
  return (
    <div className="px-4 md:px-12 lg:px-20 py-16 ">
      <div className="flex flex-col md:flex-row items-center justify-between">
        {/* Left: Text Content */}
        <div className="flex-2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-orange-600 leading-tight">
            Penny Juice
          </h1>
          <p className="mt-4 text-gray-700 text-lg md:text-xl text-wrap w-1/2">
            Experience the vibrant burst of flavor with Penny Juice’s
            handcrafted blends. From refreshing classics to innovative
            creations, our juices will elevate your taste buds.
          </p>

          {/* CTA */}
          <div className="mt-6">
            <button className="px-6 py-3 border rounded-xl transition shadow-md">
              Order Now
            </button>
          </div>
        </div>

        {/* Right: Hero Image */}
        <div className="flex-1">
          <img
            src={logo}
            alt="Penny Juice logo"
            className="w-full max-w-sm mx-auto md:mx-0"
          />
        </div>
      </div>
    </div>
  );
}
