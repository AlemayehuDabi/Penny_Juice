import { CardJuice } from "./cardJuice";
import { Juice } from "../db/index";

export const FeaturedJuice = () => {
  return (
    <div className="flex flex-col gap-6">
      <span className="text-xl font-semibold tracking-wider">
        Featured Juice
      </span>
      <div className="flex justify-between items-center gap-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4">
          {Juice.map((item, index) => (
            <CardJuice key={index} Juice={item} />
          ))}
        </div>
      </div>
    </div>
  );
};
