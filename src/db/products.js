const products = [
  {
    id: "01",
    category: "STARTERS",
    categoryTitle: "STARTERS",
    data: [
      {
        id: "01",
        subCategory: "starters",
        subCategoryTitle: "Starters",
        data: [
          {
            id: "01",
            name: "Deghi Chargha",
            discription:
              "Whole skinless chicken marinated with our in house special spices and steam rosted",
            image: "https://www.masala.tv/wp-content/uploads/2018/03/1-47.jpg",
            price: "8.00",
          },
          {
            id: "02",
            name: "Fried Chargha",
            discription:
              "Whole skinless chicken marinated with our in house special spices and deep fried in vegetable oil",
            image: "https://i.ytimg.com/vi/nYBztlmoXHU/maxresdefault.jpg",
            price: "9.00",
          },
          {
            id: "03",
            name: "Lahori Fish (per KG - on the bone)",
            discription:
              "Rohu fish (on the bone) marinated with special gram flour & Lahori spices, deep fried in vegetable oil",
            image:
              "https://www.chilitochoc.com/wp-content/uploads/2020/09/lahori-fried-fish-3.jpg",
            price: "20.00",
          },
          {
            id: "04",
            name: "Lamb Seekh Kebab (4 pcs)",
            discription:
              "Lamb minced meat mixed with authentic seasonings and herbs, Skewed on grill",
            image:
              "https://www.teaforturmeric.com/wp-content/uploads/2018/10/Seekh-Kebab-4-500x500.jpg",
            price: "6.00",
          },
          {
            id: "05",
            name: "Chicken Seekh Kebab (4 pcs)",
            discription:
              "Chicken minced meat mixed with authentic seasonings and herbs, Skewed on grill",
            image: "https://i.ibb.co/7Gq7HNw/IMG-7100.jpg",
            price: "6.00",
          },
          {
            id: "06",
            name: "Lamb Chops (5 pcs)",
            discription:
              "Lamb Chops marinated with our special seasonings and grilled",
            image:
              "https://s23209.pcdn.co/wp-content/uploads/2023/01/121205_DD_Garlic-Rosemary-Lamb-Chops_253.jpg",
            price: "9.00",
          },
          {
            id: "07",
            name: "Chicken Wings (5 pcs)",
            discription:
              "Chicken Wings marinated with our special seasonings and grilled",
            image:
              "https://thewoodenskillet.com/wp-content/uploads/2021/09/grilled-chicken-wings-recipe-1.jpg",
            price: "5.00",
          },
          {
            id: "08",
            name: "Lamb Tikka",
            discription:
              "Lamb Tikka marinated with our special seasonings and grilled",
            image:
              "https://www.greedygourmet.com/wp-content/uploads/2018/07/lambtikka.jpg",
            price: "9.00",
          },
          {
            id: "09",
            name: "Chicken Tikka",
            discription:
              "Chicken Tikka marinated with our special seasonings and grilled",
            image:
              "https://www.flavorquotient.com/wp-content/uploads/2020/04/Chicken-Tikka-FQ-4-1-of-1.jpg",
            price: "7.50",
          },
          {
            id: "10",
            name: "Malai Boti",
            discription:
              "Malai Boti marinated with our special seasonings and grilled",
            image: "https://i.ibb.co/5L3XVmQ/IMG-7096.jpg",
            price: "7.50",
          },
          {
            id: "11",
            name: "Family Plater",
            discription:
              "Chicken Wings, Lamb Chops, Lamb & Chicken Tikka, Milai Boti & Seekh Kebab",
            image: "https://i.ibb.co/KL2Cr7s/IMG-7103.jpg",
            price: "20.00",
          },
        ],
      },
    ],
  },
  {
    id: "02",
    category: "MAIN",
    categoryTitle: "MAIN",
    data: [
      {
        id: "01",
        subCategory: "lamb_karahi",
        subCategoryTitle: "LAMB KARAHI PER KILO",
        data: [
          {
            id: "01",
            name: "1KG Lamb Karahi",
            discription: "Lamb Karahi",
            image: "",
            price: "26.00",
          },
          {
            id: "02",
            name: "1KG Lamb Tomato Karahi",
            discription: "Lamb Tomato Karahi",
            image: "",
            price: "30.00",
          },
          {
            id: "03",
            name: "1KG Lamb Chilli Karahi",
            discription: "Lamb Chilli Karahi",
            image: "",
            price: "30.00",
          },
          {
            id: "04",
            name: "1KG Lamb Butter Karahi",
            discription: "Lamb Butter Karahi",
            image: "",
            price: "30.00",
          },
          {
            id: "05",
            name: "1KG Lamb Boneless Karahi",
            discription: "Lamb Boneless Karahi",
            image: "",
            price: "30.00",
          },
        ],
      },
      {
        id: "02",
        subCategory: "chicken_karahi",
        subCategoryTitle: "CHICKEN KARAHI PER KILO",
        data: [
          {
            id: "01",
            name: "1KG Chicken Karahi",
            discription: "Chicken Karahi",
            image: "",
            price: "20.00",
          },

          {
            id: "02",
            name: "1KG Chicken Tomato Karahi",
            discription: "Chicken Tomato Karahi",
            image: "",
            price: "25.00",
          },
          {
            id: "03",
            name: "1KG Chicken Chilli Karahi",
            discription: "Chicken Chilli Karahi",
            image: "",
            price: "25.00",
          },
          {
            id: "04",
            name: "1KG Chicken Butter Karahi",
            discription: "Chicken Butter Karahi",
            image: "",
            price: "25.00",
          },
          {
            id: "05",
            name: "1KG Chicken Boneless Karahi",
            discription: "Chicken Boneless Karahi",
            image: "",
            price: "25.00",
          },
        ],
      },
      {
        id: "03",
        subCategory: "special_tawa",
        subCategoryTitle: "SPECIAL LAHORI TAWA",
        data: [
          {
            id: "01",
            name: "Signature Tawa for 4",
            discription:
              "4 Chicken Legs, 4 Lamb Chops, 4 Wings, 4 Seekh Kebab, Choice of 2 curries (1 VEG , 1 NON-VEG) Rice, Chips, 2 Naan & 2 Roti",
            image: "",
            price: "60.00",
          },
          {
            id: "02",
            name: "Signature Tawa for 6",
            discription:
              "6 Chicken Legs, 6 Lamb Chops, 6 Wings, 6 Seekh Kebab, Choice of 2 curries (1 VEG , 1 NON-VEG) Rice, Chips, 3 Naan & 3 Roti",
            image: "",
            price: "80.00",
          },
        ],
      },
      {
        id: "04",
        subCategory: "daily_special",
        subCategoryTitle: "Daily Special",
        data: [
          {
            id: "01",
            name: "Lamb Karahi",
            discription: "Lamb Karahi (on the bone)",
            image: "",
            price: "10.00",
          },
          {
            id: "02",
            name: "Chicken Karahi",
            discription: "Chicken Karahi (on the bone)",
            image: "",
            price: "8.00",
          },
          {
            id: "03",
            name: "Chilli Chicken Karahi",
            discription: "Chilli Chicken Karahi (boneless)",
            image: "",
            price: "9.00",
          },
          {
            id: "04",
            name: "Lahori Chanay",
            discription: "Lahori Chanay",
            image: "",
            price: "6.00",
          },
          {
            id: "05",
            name: "Lamb Biryani",
            discription: "Lamb Biryani",
            image: "",
            price: "9.00",
          },
          {
            id: "06",
            name: "Chicken Biryani",
            discription: "Chicken Biryani",
            image: "",
            price: "8.00",
          },
          {
            id: "07",
            name: "Lamb Karahi (Large)",
            discription: "Lamb Karahi (on the bone)",
            image: "",
            price: "15.00",
          },
          {
            id: "08",
            name: "Chicken Karahi (Large)",
            discription: "Chicken Karahi (on the bone)",
            image: "",
            price: "12.00",
          },
          {
            id: "09",
            name: "Chilli Chicken Karahi (Large)",
            discription: "Chilli Chicken Karahi (boneless)",
            image: "",
            price: "14.00",
          },
        ],
      },
      {
        id: "05",
        subCategory: "lahori_special",
        subCategoryTitle: "Lahori Special",
        data: [
          {
            id: "01",
            name: "Hareesa",
            discription: "Hareesa (Portion)",
            image: "",
            price: "10.00",
          },
          {
            id: "02",
            name: "Haleem",
            discription: "Haleem (Portion)",
            image: "",
            price: "10.00",
          },
          {
            id: "03",
            name: "Paya (Lamb)",
            discription: "Lamb Paya (2 PCS) (Portion)",
            image: "",
            price: "10.00",
          },
          {
            id: "04",
            name: "Nihari",
            discription: "Nihari  (Portion)",
            image: "",
            price: "10.00",
          },
          {
            id: "05",
            name: "Chinioti Kunna Gosht",
            discription: "Chinioti Kunna Gosht (Portion) ",
            image: "",
            price: "15.00",
          },
        ],
      },
      {
        id: "06",
        subCategory: "chef_special",
        subCategoryTitle: "Chef's Special",
        data: [
          {
            id: "01",
            name: "Aloo Gosht",
            discription: "Potato and Lamb",
            image: "",
            price: "8.00",
          },
          {
            id: "02",
            name: "Daal Gosht",
            discription: "Lentil and Lamb",
            image: "",
            price: "8.00",
          },
          {
            id: "03",
            name: "Aloo Keema",
            discription: "Aloo Keema",
            image: "",
            price: "8.00",
          },
          {
            id: "04",
            name: "Daal Mash",
            discription: "Daal Mash",
            image: "",
            price: "7.00",
          },
          {
            id: "05",
            name: "Mixed Vegetable",
            discription: "Mixed Vegetable",
            image: "",
            price: "7.00",
          },
        ],
      },
    ],
  },
  {
    id: "03",
    category: "SUNDRIES",
    categoryTitle: "SUNDRIES",
    data: [
      {
        id: "01",
        subCategory: "SUNDRIES",
        subCategoryTitle: "SUNDRIES",
        data: [],
      },
    ],
  },
  {
    id: "04",
    category: "DESSERTS",
    categoryTitle: "DESSERTS",
    data: [
      {
        id: "01",
        subCategory: "DESSERTS",
        subCategoryTitle: "DESSERTS",
        data: [],
      },
    ],
  },
  {
    id: "05",
    category: "DRINKS",
    categoryTitle: "DRINKS",
    data: [
      {
        id: "01",
        subCategory: "DRINKS",
        subCategoryTitle: "DRINKS",
        data: [],
      },
    ],
  },
];

export default products;
