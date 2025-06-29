import logo from "../image/Orange-Juice-Splash-PNG-Clipart.png";

export interface ProductProps {
  id: number;
  title: string;
  description: string;
  image: string;
  time: string;
  ingredients: string[];
  price: string;
}

export const Juice = [
  {
    id: 1,
    title: "Orange Juice",
    description:
      "Delicious, nutrient-rich orange juice made from real fruit. No added sugar, just pure flavor.",
    image: `${logo}`,
    time: "9 minutes",
    ingredients: ["orange"],
    price: "$29.99",
  },
  {
    id: 2,
    title: "Orange Juice",
    description:
      "Delicious, nutrient-rich orange juice made from real fruit. No added sugar, just pure flavor.",
    image: `${logo}`,
    time: "9 minutes",
    ingredients: ["orange"],
    price: "$39.99",
  },
  {
    id: 3,
    title: "Orange Juice",
    description:
      "Delicious, nutrient-rich orange juice made from real fruit. No added sugar, just pure flavor.",
    image: `${logo}`,
    time: "9 minutes",
    ingredients: ["orange"],
    price: "$49.99",
  },
  {
    id: 4,
    title: "Orange Juice",
    description:
      "Delicious, nutrient-rich orange juice made from real fruit. No added sugar, just pure flavor.",
    image: `${logo}`,
    time: "9 minutes",
    ingredients: ["orange"],
    price: "$59.99",
  },
];
