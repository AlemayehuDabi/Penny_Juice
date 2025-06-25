import { CatagoriesItems } from "./CatagoriesItems";

export const Catagories = () => {
  return (
    <div className="mt-20">
      <div>
        <div className="flex flex-col justify-center items-center text-center gap-5">
          <h1 className="text-4xl font-semibold ">
            View Our Range Of Categories
          </h1>
          <p className="max-w-1/2">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam.
          </p>
        </div>

        <div>
          <CatagoriesItems />
        </div>
      </div>
    </div>
  );
};
