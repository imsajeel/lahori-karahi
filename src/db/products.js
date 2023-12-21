const productCategories = [
  { id: "01", category: "STARTERS", title: "Starters", subCategories: [] },
  {
    id: "02",
    category: "MAIN",
    title: "Main",
    subCategories: [
      { subCategory: "LAMB_KARAHI", title: "Lamb Karahi per Kilo" },
      { subCategory: "CHICKEN_KARAHI", title: "Chicken Karahi per Kilo" },
      { subCategory: "DAILY_SPECIAL", title: "Daily Special" },
      { subCategory: "LAHORI_SPECIAL", title: "Lahori Special" },
      { subCategory: "CHEF_SPECIAL", title: "Chef Special" },
    ],
  },
];

const products = [
  {
    id: "01",
    name: "Deghi Chargha",
    discription:
      "Whole skinless chicken marinated with our in house special spices and steam rosted",
    image: "https://www.masala.tv/wp-content/uploads/2018/03/1-47.jpg",
    price: "8.00",
    category: "STARTERS",
  },
  {
    id: "02",
    name: "Fried Chargha",
    discription:
      "Whole skinless chicken marinated with our in house special spices and deep fried in vegetable oil",
    image: "https://i.ytimg.com/vi/nYBztlmoXHU/maxresdefault.jpg",
    price: "9.00",
    category: "STARTERS",
  },
  {
    id: "03",
    name: "Lahori Fish (per KG - on the bone)",
    discription:
      "Rohu fish (on the bone) marinated with special gram flour & Lahori spices, deep fried in vegetable oil",
    image:
      "https://www.chilitochoc.com/wp-content/uploads/2020/09/lahori-fried-fish-3.jpg",
    price: "20.00",
    category: "STARTERS",
  },
  {
    id: "04",
    name: "Lamb Seekh Kebab (4 pcs)",
    discription:
      "Lamb minced meat mixed with authentic seasonings and herbs, Skewed on grill",
    image:
      "https://www.teaforturmeric.com/wp-content/uploads/2018/10/Seekh-Kebab-4-500x500.jpg",
    price: "6.00",
    category: "STARTERS",
  },
  {
    id: "05",
    name: "Chicken Seekh Kebab (4 pcs)",
    discription:
      "Chicken minced meat mixed with authentic seasonings and herbs, Skewed on grill",
    image: "https://i.ibb.co/7Gq7HNw/IMG-7100.jpg",
    price: "6.00",
    category: "STARTERS",
  },
  {
    id: "06",
    name: "Lamb Chops (5 pcs)",
    discription: "Lamb Chops marinated with our special seasonings and grilled",
    image:
      "https://s23209.pcdn.co/wp-content/uploads/2023/01/121205_DD_Garlic-Rosemary-Lamb-Chops_253.jpg",
    price: "9.00",
    category: "STARTERS",
  },
  {
    id: "07",
    name: "Chicken Wings (5 pcs)",
    discription:
      "Chicken Wings marinated with our special seasonings and grilled",
    image:
      "https://thewoodenskillet.com/wp-content/uploads/2021/09/grilled-chicken-wings-recipe-1.jpg",
    price: "5.00",
    category: "STARTERS",
  },
  {
    id: "08",
    name: "Lamb Tikka",
    discription: "Lamb Tikka marinated with our special seasonings and grilled",
    image:
      "https://www.greedygourmet.com/wp-content/uploads/2018/07/lambtikka.jpg",
    price: "9.00",
    category: "STARTERS",
  },
  {
    id: "09",
    name: "Chicken Tikka",
    discription:
      "Chicken Tikka marinated with our special seasonings and grilled",
    image:
      "https://www.flavorquotient.com/wp-content/uploads/2020/04/Chicken-Tikka-FQ-4-1-of-1.jpg",
    price: "7.50",
    category: "STARTERS",
  },
  {
    id: "09",
    name: "Malai Boti",
    discription: "Malai Boti marinated with our special seasonings and grilled",
    image: "https://i.ibb.co/5L3XVmQ/IMG-7096.jpg",
    price: "7.50",
    category: "STARTERS",
  },
  {
    id: "10",
    name: "Family Plater",
    discription:
      "Chicken Wings, Lamb Chops, Lamb & Chicken Tikka, Milai Boti & Seekh Kebab",
    image: "https://i.ibb.co/KL2Cr7s/IMG-7103.jpg",
    price: "20.00",
    category: "STARTERS",
  },
  // {
  //   id: "11",
  //   name: "Chicken Karahi",
  //   discription: "Chicken Karahi",
  //   image:
  //     "https://rookiewithacookie.com/wp-content/uploads/2017/01/karahi-1024x720.jpg",
  //   price: "20.00",
  //   category: "MAIN",
  // },
  {
    id: "11",
    name: "1KG Lamb Karahi",
    discription: "Lamb Karahi",
    image: "",
    price: "26.00",
    category: "MAIN",
    subCategory: "LAMB_KARAHI",
    subCategoryTitle: "LAMB KARAHI PER KILO",
  },

  {
    id: "12",
    name: "1KG Lamb Tomato Karahi",
    discription: "Lamb Tomato Karahi",
    image: "",
    price: "30.00",
    category: "MAIN",
    subCategory: "LAMB_KARAHI",
  },
  {
    id: "13",
    name: "1KG Lamb Chilli Karahi",
    discription: "Lamb Chilli Karahi",
    image: "",
    price: "30.00",
    category: "MAIN",
    subCategory: "LAMB_KARAHI",
  },
  {
    id: "14",
    name: "1KG Lamb Butter Karahi",
    discription: "Lamb Butter Karahi",
    image: "",
    price: "30.00",
    category: "MAIN",
    subCategory: "LAMB_KARAHI",
  },
  {
    id: "15",
    name: "1KG Lamb Boneless Karahi",
    discription: "Lamb Boneless Karahi",
    image: "",
    price: "30.00",
    category: "MAIN",
    subCategory: "LAMB_KARAHI",
  },
  {
    id: "16",
    name: "1KG Chicken Karahi",
    discription: "Chicken Karahi",
    image: "",
    price: "20.00",
    category: "MAIN",
    subCategory: "CHICKEN_KARAHI",
  },

  {
    id: "17",
    name: "1KG Chicken Tomato Karahi",
    discription: "Chicken Tomato Karahi",
    image: "",
    price: "25.00",
    category: "MAIN",
    subCategory: "CHICKEN_KARAHI",
  },
  {
    id: "18",
    name: "1KG Chicken Chilli Karahi",
    discription: "Chicken Chilli Karahi",
    image: "",
    price: "25.00",
    category: "MAIN",
    subCategory: "CHICKEN_KARAHI",
  },
  {
    id: "19",
    name: "1KG Chicken Butter Karahi",
    discription: "Chicken Butter Karahi",
    image: "",
    price: "25.00",
    category: "MAIN",
    subCategory: "CHICKEN_KARAHI",
  },
  {
    id: "20",
    name: "1KG Chicken Boneless Karahi",
    discription: "Chicken Boneless Karahi",
    image: "",
    price: "25.00",
    category: "MAIN",
    subCategory: "CHICKEN_KARAHI",
  },
];
export { productCategories };
export default products;
