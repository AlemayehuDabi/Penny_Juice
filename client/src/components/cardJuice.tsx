interface IngredientProps {
  name: string;
}

const Ingredient = ({ name }: IngredientProps) => {
  return (
    <button className="border border-amber-700 text-white bg-amber-500 text-sm md:text-base font-medium px-3 py-1 rounded-full capitalize hover:bg-amber-600 transition">
      {name}
    </button>
  );
};

interface JuiceItem {
  title: string;
  description: string;
  image: string;
  time: string;
  ingredients: string[];
}

interface CardJuiceProps {
  Juice: JuiceItem;
}

export const CardJuice = ({ Juice }: CardJuiceProps) => {
  const { title, description, image, time, ingredients } = Juice;

  return (
    <div className="max-w-sm rounded-lg shadow-md border border-gray-200 overflow-hidden bg-white hover:shadow-lg transition">
      <img src={image} alt={title} className="w-full h-48 object-cover" />

      <div className="p-4 flex flex-col gap-4">
        <div className="flex justify-between text-sm text-gray-500">
          <span>{time}</span>
          <span className="font-semibold">...</span>
        </div>

        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
        <p className="text-sm text-gray-600">{description}</p>

        <div className="flex flex-wrap gap-2">
          {ingredients.map((ingredient, i) => (
            <Ingredient key={i} name={ingredient} />
          ))}
        </div>
      </div>
    </div>
  );
};
