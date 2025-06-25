import banner from "../image/banner2.png";

export default function Hero() {
  return (
    <section className="py-16 lg:py-10 mt-10 md:mb-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex justify-between items-center">
          {/* Main Heading */}
          <div className="mb-8">
            <h1 className="text-6xl md:text-6xl font-bold text-gray-900 mb-4">
              Naturally Colorful
              <span className="block text-orange-500">Juice for Kids</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl">
              Delicious, nutrient-rich concentrates made just for children — no
              added sugar, no preservatives, just vibrant fruit flavor in every
              drop. Perfect for schools, daycares, and families who care about
              quality and taste.
            </p>
          </div>

          <div>
            <img src={banner} />
          </div>
        </div>
      </div>
    </section>
  );
}
