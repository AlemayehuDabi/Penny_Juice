import { Heart, Star } from "lucide-react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

import type { ProductProps } from "../db";

type DetailCompProps = {
  Product: ProductProps;
};

export default function DetailComp({ Product }: DetailCompProps) {
  return (
    <div className="flex flex-col gap-10">
      <NavBar />

      {/* Top section */}
      <div className="flex flex-col lg:flex-row gap-10 px-6 md:px-10 py-5 mt-10 w-full mx-auto">
        {/* Image */}
        <div className="flex-1 max-h-[30rem]">
          <img
            src={Product.image}
            className="object-contain w-full h-full rounded-xl"
          />
        </div>

        {/* Info */}
        <div className="flex-1 flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-semibold">
                Lorem ipsum dolor sit amet consectetur
              </h1>
              <Heart className="text-gray-300 cursor-pointer" />
            </div>

            <div className="flex items-center gap-2 text-yellow-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill="currentColor" stroke="none" />
              ))}
              <span className="text-sm text-gray-500 ml-2">(32 reviews)</span>
            </div>
            <p className="text-xl font-bold text-black">$54.98</p>
            <hr />
          </div>

          <p className="text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
            ducimus ipsa et architecto blanditiis in obcaecati enim suscipit
            quae iste neque qui veniam reprehenderit perspiciatis quod
            reiciendis, perferendis rerum praesentium!
          </p>

          <div className="flex flex-col justify-center gap-5 items-center w-full sm:w-2/3 px-2">
            <div className="flex gap-3 w-full">
              <div className="flex gap-3 items-center justify-center border border-gray-200 rounded-full flex-1 py-2">
                <button className="text-lg px-2">-</button>
                <span className="font-medium">1</span>
                <button className="text-lg px-2">+</button>
              </div>
              <button className="flex-[2] py-2 rounded-full bg-black text-white font-semibold">
                Add to cart
              </button>
            </div>
            <button className="border border-gray-950 w-full py-2 rounded-full font-semibold">
              Buy now
            </button>
          </div>
        </div>
      </div>

      {/* Description / Review */}
      <div className="w-full bg-gray-100 px-6 md:px-20 py-10 md:py-20">
        <div className="flex flex-col gap-6">
          <div className="flex gap-2 items-center">
            <h1 className="text-lg font-semibold">Description</h1>
            <div className="w-px h-6 bg-gray-950" />
            <h1 className="text-lg font-semibold">Review</h1>
          </div>

          <p className="text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
            laudantium, nostrum pariatur veniam quibusdam numquam eius rem
            doloribus! Voluptas unde debitis repellendus animi doloremque
            reiciendis, ullam aliquid vel quaerat voluptatibus.
          </p>
        </div>
      </div>

      {/* Similar Products */}
      <div className="px-6 md:px-20 py-10">
        <h2 className="text-2xl font-semibold mb-6">Similar Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          <div className="border rounded-xl p-4 flex flex-col gap-2 hover:shadow-lg transition">
            <img src={Product.image} className="w-full h-40 object-contain" />
            <h3 className="text-lg font-semibold">{Product.title}</h3>
            <p className="text-gray-700">{Product.price}</p>
            <button className="mt-auto bg-black text-white rounded-full py-1 text-sm font-medium">
              View
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
