// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getDiets } from "../actions/diet";
// import { useNavigate } from "react-router-dom";

// const DietCard = ({ diet }) => {
//   const navigate = useNavigate();

//   // console.log(diet);

//   return (
//     <div className="bg-white rounded-lg overflow-hidden shadow-md flex">
//       <img
//         className="w-24 h-24 object-cover"
//         src={diet.image}
//         alt={diet.dietName}
//       />
//       <div className="p-4 flex flex-col">
//         <div className="text-xl font-semibold">{diet.dietName}</div>
//         <div className="flex items-center space-x-2 mt-2 text-gray-600 text-sm">
//           <span>{diet.duration}min</span>
//           <span>|</span>
//           <span>Intensity</span>
//           {Array.from({ length: diet?.intensity }).map((_, index) => (
//             <span
//               key={index}
//               className="w-2 h-2 bg-gray-400 rounded-full"
//             ></span>
//           ))}
//         </div>
//         <button
//           className="mt-4 px-4 py-2 w-32 bg-gradient-to-r from-pink-500 to-orange-400 text-white font-medium rounded-full shadow-md flex-shrink-0"
//           onClick={() => navigate(`/dietframe/${diet._id}`)}
//         >
//           START
//         </button>
//       </div>
//     </div>
//   );
// };

// const DietList = () => {
//   const dispatch = useDispatch();
//   const mltype = window.location.search.substring("dietPlace").split("=")[1];

//   const dietData = useSelector((state) =>
//     state.diets.filter((w) => w.dietPlace === mltype)
//   ); // Assuming you've named your reducer 'diets'

//   useEffect(() => {
//     dispatch(getDiets()); // Dispatch the action to fetch diets when the component mounts
//   }, [dispatch]);

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100">
//       <div className="bg-white w-full max-w-3xl p-8 rounded-xl shadow-xl">
//         <div className="text-2xl font-bold mb-6">Your Home Diets</div>
//         {dietData?.map((diet, index) => (
//           <DietCard key={index} diet={diet} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default DietList;

import React from "react";

const DietCard = ({ diet }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md flex">
      <img
        className="w-24 h-24 object-cover"
        src={diet.image}
        alt={diet.dietType}
      />
      <div className="p-4 flex flex-col">
        {/* <div className="text-xl font-semibold">{diet.dietType}</div> */}
        <div className="text-xl font-semibold">{diet.dayofWeek}</div>
        <div className="flex items-center space-x-2 mt-2 text-gray-600 text-sm">
          {/* <span>{diet.dayofWeek}</span> */}
          <span>{diet.dietType}</span>
        </div>
        <div className="mt-4">
          <div className="font-semibold">Breakfast:</div>
          <ul>
            {diet.breakfast.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="mt-4">
          <div className="font-semibold">Lunch:</div>
          <ul>
            {diet.lunch.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="mt-4">
          <div className="font-semibold">Dinner:</div>
          <ul>
            {diet.dinner.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const DietList = () => {
  const dietData = [
    {
      _id: "64ea0951d1af442652d6eb4d",
      dietType: "High Protein",
      isVeg: "Yes",
      dayofWeek: "Monday",
      image:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      breakfast: [
        "Scrambled Eggs",
        "2 eggs",
        "Turkey Bacon",
        "2 strips",
        "220",
      ],
      lunch: [
        "Grilled Chicken Breast",
        "1 breast",
        "Brown Rice",
        "1/2 cup",
        "Steamed Vegetables",
        "1 cup",
        "400",
      ],
      dinner: [
        "Grilled Salmon",
        "1 fillet",
        "Asparagus",
        "1/2 cup",
        "Quinoa",
        "1/2 cup",
        "411",
      ],
    },
    {
      _id: "64ea0951d1af442652d6eb4e",
      dietType: "High Protein",
      isVeg: "Yes",
      dayofWeek: "Tuesday",
      image:
        "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      breakfast: [
        "Greek Yogurt Parfait",
        "1 cup",
        "Mixed Berries",
        "1/2 cup",
        "Almonds",
        "1/4 cup",
        "280",
      ],
      lunch: [
        "Chickpea Salad",
        "1 cup",
        "Quinoa",
        "1/2 cup",
        "Feta Cheese",
        "2 tbsp",
        "450",
      ],
      dinner: [
        "Tofu Stir-Fry",
        "4 oz",
        "Broccoli",
        "1 cup",
        "Edamame",
        "1/2 cup",
        "350",
      ],
    },
    {
      _id: "64ea0951d1af442652d6eb4f",
      dietType: "High Protein",
      isVeg: "Yes",
      dayofWeek: "Wednesday",
      image:
        "https://images.unsplash.com/photo-1676300185165-3f543c1fcb72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      breakfast: [
        "Protein Pancakes",
        "2 pancakes",
        "Mixed Nuts",
        "1/4 cup",
        "Blueberries",
        "1/4 cup",
        "320",
      ],
      lunch: [
        "Lentil Soup",
        "1 cup",
        "Whole Grain Roll",
        "1 roll",
        "Side Salad",
        "1 cup",
        "380",
      ],
      dinner: [
        "Black Bean and Quinoa Bowl",
        "1 bowl",
        "Avocado",
        "1/4",
        "Salsa",
        "2 tbsp",
        "420",
      ],
    },
    {
      _id: "64ea0951d1af442652d6eb50",
      dietType: "High Protein",
      isVeg: "Yes",
      dayofWeek: "Thursday",
      image:
        "https://images.unsplash.com/photo-1587913956756-4fcf4833241d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
      breakfast: [
        "Cottage Cheese Bowl",
        "1 cup",
        "Peach Slices",
        "1/2 cup",
        "Walnuts",
        "1/4 cup",
        "290",
      ],
      lunch: [
        "Quinoa and Black Bean Salad",
        "1 cup",
        "Roasted Red Peppers",
        "1/4 cup",
        "Pumpkin Seeds",
        "2 tbsp",
        "360",
      ],
      dinner: [
        "Eggplant and Chickpea Curry",
        "1 serving",
        "Brown Rice",
        "1/2 cup",
        "Naan Bread",
        "1 piece",
        "420",
      ],
    },
    {
      _id: "64ea0951d1af442652d6eb51",
      dietType: "High Protein",
      isVeg: "Yes",
      dayofWeek: "Friday",
      image:
        "https://images.unsplash.com/photo-1587913956756-4fcf4833241d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
      breakfast: [
        "Chia Seed Pudding",
        "1 serving",
        "Peanut Butter",
        "1 tbsp",
        "Banana Slices",
        "1/2 banana",
        "320",
      ],
      lunch: [
        "Tempeh and Avocado Wrap",
        "1 wrap",
        "Mixed Greens",
        "1 cup",
        "Carrot Sticks",
        "1/2 cup",
        "380",
      ],
      dinner: [
        "Spinach and Tofu Stuffed Bell Pepper",
        "1 pepper",
        "Quinoa",
        "1/2 cup",
        "Side Salad",
        "1 cup",
        "410",
      ],
    },
    {
      _id: "64ea0951d1af442652d6eb52",
      dietType: "High Protein",
      isVeg: "Yes",
      dayofWeek: "Saturday",
      image:
        "https://images.unsplash.com/photo-1587913956756-4fcf4833241d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
      breakfast: [
        "Veggie and Tofu Scramble",
        "1 serving",
        "Whole Grain Toast",
        "1 slice",
        "Mixed Berries",
        "1/2 cup",
        "330",
      ],
      lunch: [
        "Chickpea and Spinach Salad",
        "1 serving",
        "Roasted Almonds",
        "1/4 cup",
        "Olive Oil Dressing",
        "2 tbsp",
        "370",
      ],
      dinner: [
        "Mushroom and Lentil Stuffed Zucchini",
        "2 zucchinis",
        "Quinoa",
        "1/2 cup",
        "Green Beans",
        "1/2 cup",
        "420",
      ],
    },
    {
      _id: "64ea0951d1af442652d6eb53",
      dietType: "High Protein",
      isVeg: "Yes",
      dayofWeek: "Sunday",
      image:
        "https://images.unsplash.com/photo-1587913956756-4fcf4833241d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
      breakfast: [
        "Protein-Packed Smoothie",
        "1 serving",
        "Almond Butter",
        "1 tbsp",
        "Spinach",
        "1 cup",
        "310",
      ],
      lunch: [
        "Tofu and Broccoli Stir-Fry",
        "1 serving",
        "Brown Rice",
        "1/2 cup",
        "Cashews",
        "2 tbsp",
        "380",
      ],
      dinner: [
        "Lentil and Vegetable Stew",
        "1 serving",
        "Whole Grain Roll",
        "1 roll",
        "Side Salad",
        "1 cup",
        "410",
      ],
    },
    {
      _id: "64ea0951d1af442652d6eb54",
      dietType: "LowCarbs",
      isVeg: "Yes",
      dayofWeek: "Monday",
      image:
        "https://images.unsplash.com/photo-1587913956756-4fcf4833241d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
      breakfast: [
        "Avocado and Egg",
        "1 avocado",
        "Egg",
        "1",
        "Spinach",
        "1/2 cup",
        "250",
      ],
      lunch: [
        "Zucchini Noodles",
        "1 cup",
        "Pesto Sauce",
        "2 tbsp",
        "Cherry Tomatoes",
        "1/2 cup",
        "320",
      ],
      dinner: [
        "Cauliflower Rice Stir-Fry",
        "1 cup",
        "Tofu",
        "4 oz",
        "Bell Peppers",
        "1/2 cup",
        "Broccoli",
        "1/2 cup",
        "280",
      ],
    },
    {
      _id: "64ea0951d1af442652d6eb55",
      dietType: "LowCarbs",
      isVeg: "Yes",
      dayofWeek: "Tuesday",
      image:
        "https://images.unsplash.com/photo-1587913956756-4fcf4833241d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
      breakfast: [
        "Chia Seed Pudding",
        "1 serving",
        "Almonds",
        "1/4 cup",
        "Raspberries",
        "1/4 cup",
        "290",
      ],
      lunch: [
        "Greek Salad",
        "1 serving",
        "Cucumber",
        "1/2 cup",
        "Olives",
        "2 tbsp",
        "Feta Cheese",
        "1/4 cup",
        "320",
      ],
      dinner: [
        "Grilled Portobello Mushrooms",
        "2 mushrooms",
        "Cabbage Slaw",
        "1/2 cup",
        "Cauliflower Mash",
        "1/2 cup",
        "310",
      ],
    },
    {
      _id: "64ea0951d1af442652d6eb56",
      dietType: "LowCarbs",
      isVeg: "Yes",
      dayofWeek: "Wednesday",
      image:
        "https://images.unsplash.com/photo-1587913956756-4fcf4833241d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
      breakfast: [
        "Scrambled Tofu",
        "1 cup",
        "Bell Peppers",
        "1/4 cup",
        "Spinach",
        "1/4 cup",
        "280",
      ],
      lunch: [
        "Cauliflower Soup",
        "1 serving",
        "Side Salad",
        "1 cup",
        "Nuts",
        "1/4 cup",
        "330",
      ],
      dinner: [
        "Eggplant Rollatini",
        "2 rolls",
        "Tomato Sauce",
        "1/2 cup",
        "Side Salad",
        "1 cup",
        "350",
      ],
    },
    {
      _id: "64ea0951d1af442652d6eb57",
      dietType: "LowCarbs",
      isVeg: "Yes",
      dayofWeek: "Thursday",
      image: "https://images.unsplash.com/photo-1617402251957-2e61217d320b",
      breakfast: [
        "Yogurt and Berry Bowl",
        "1 cup",
        "Mixed Berries",
        "1/2 cup",
        "Chia Seeds",
        "1 tbsp",
        "290",
      ],
      lunch: [
        "Cucumber Avocado Salad",
        "1 serving",
        "Nuts",
        "1/4 cup",
        "Olive Oil Dressing",
        "2 tbsp",
        "320",
      ],
      dinner: [
        "Stuffed Bell Peppers",
        "2 peppers",
        "Cauliflower Rice",
        "1/2 cup",
        "Green Beans",
        "1/2 cup",
        "330",
      ],
    },
    {
      _id: "64ea0951d1af442652d6eb58",
      dietType: "LowCarbs",
      isVeg: "Yes",
      dayofWeek: "Friday",
      image: "https://images.unsplash.com/photo-1559599238-bf4539e0cb52",
      breakfast: [
        "Berry Smoothie",
        "1 serving",
        "Almond Butter",
        "1 tbsp",
        "Spinach",
        "1 cup",
        "280",
      ],
      lunch: [
        "Cauliflower Fried Rice",
        "1 serving",
        "Edamame",
        "1/4 cup",
        "Sesame Seeds",
        "1 tbsp",
        "350",
      ],
      dinner: [
        "Stuffed Zucchini Boats",
        "2 boats",
        "Side Salad",
        "1 cup",
        "Hummus",
        "2 tbsp",
        "330",
      ],
    },
    {
      _id: "64ea0951d1af442652d6eb59",
      dietType: "LowCarbs",
      isVeg: "Yes",
      dayofWeek: "Saturday",
      image: "https://images.unsplash.com/photo-1544233882-7a3e8e8625f6",
      breakfast: [
        "Veggie Omelette",
        "1 omelette",
        "Cheese",
        "2 tbsp",
        "Avocado",
        "1/4",
        "300",
      ],
      lunch: [
        "Cauliflower Crust Pizza",
        "1 slice",
        "Side Salad",
        "1 cup",
        "Roasted Vegetables",
        "1/2 cup",
        "340",
      ],
      dinner: [
        "Stuffed Mushrooms",
        "4 mushrooms",
        "Cauliflower Mash",
        "1/2 cup",
        "Steamed Asparagus",
        "1/2 cup",
        "320",
      ],
    },
    {
      _id: "64ea0951d1af442652d6eb5a",
      dietType: "LowCarbs",
      isVeg: "Yes",
      dayofWeek: "Sunday",
      image: "https://images.unsplash.com/photo-1592417970465-7f1a8ff4904e",
      breakfast: [
        "Chia Seed Pudding",
        "1 serving",
        "Mixed Nuts",
        "1/4 cup",
        "Blackberries",
        "1/4 cup",
        "290",
      ],
      lunch: [
        "Egg Salad Lettuce Wraps",
        "2 wraps",
        "Side Salad",
        "1 cup",
        "Dressing",
        "2 tbsp",
        "330",
      ],
      dinner: [
        "Grilled Veggie Skewers",
        "1 serving",
        "Cauliflower Rice",
        "1/2 cup",
        "Hummus",
        "2 tbsp",
        "320",
      ],
    },
    {
      _id: "64ef982818debf22de0c393f",
      dietType: "LowCarbs",
      isVeg: "No",
      dayofWeek: "Monday",
      image: "https://images.unsplash.com/photo-1565299621-2be7b766fc7c",
      breakfast: ["Scrambled Eggs", "2 eggs", "Bacon", "2 strips", "220"],
      lunch: [
        "Grilled Steak",
        "8 oz",
        "Cauliflower Mash",
        "1 cup",
        "Roasted Brussels Sprouts",
        "1/2 cup",
        "420",
      ],
      dinner: [
        "Salmon Fillet",
        "1 fillet",
        "Zucchini Noodles",
        "1 cup",
        "Lemon Butter Sauce",
        "2 tbsp",
        "370",
      ],
    },
    {
      _id: "64ef982818debf22de0c3940",
      dietType: "LowCarbs",
      isVeg: "No",
      dayofWeek: "Tuesday",
      image: "https://images.unsplash.com/photo-1588946032510-23b5c77e95ab",
      breakfast: [
        "Omelette",
        "3 eggs",
        "Ham",
        "1/4 cup",
        "Cheese",
        "1/4 cup",
        "290",
      ],
      lunch: [
        "Grilled Chicken Salad",
        "1 serving",
        "Avocado",
        "1/2",
        "Balsamic Vinaigrette",
        "2 tbsp",
        "350",
      ],
      dinner: [
        "Beef Stir-Fry",
        "6 oz",
        "Broccoli",
        "1 cup",
        "Bell Peppers",
        "1/2 cup",
        "320",
      ],
    },
    {
      _id: "64ef982818debf22de0c3941",
      dietType: "LowCarbs",
      isVeg: "No",
      dayofWeek: "Wednesday",
      image: "https://images.unsplash.com/photo-1550950158-3bb20a573d5f",
      breakfast: [
        "Sausage and Egg Muffins",
        "2 muffins",
        "Cheddar Cheese",
        "1/4 cup",
        "Spinach",
        "1/4 cup",
        "310",
      ],
      lunch: [
        "Tuna Salad",
        "1 serving",
        "Mixed Greens",
        "1 cup",
        "Olives",
        "1/4 cup",
        "320",
      ],
      dinner: [
        "Pork Chops",
        "2 chops",
        "Roasted Asparagus",
        "1 cup",
        "Garlic Butter",
        "2 tbsp",
        "380",
      ],
    },
    {
      _id: "64ef988918debf22de0c3943",
      dietType: "LowCarbs",
      isVeg: "No",
      dayofWeek: "Thursday",
      image: "https://images.unsplash.com/photo-1600786937392-4af709c42f69",
      breakfast: [
        "Chia Seed Pudding",
        "1 serving",
        "Peanut Butter",
        "1 tbsp",
        "Banana Slices",
        "1/2 banana",
        "320",
      ],
      lunch: [
        "Steak Salad",
        "1 serving",
        "Mixed Greens",
        "1 cup",
        "Tomato",
        "1/2",
        "Balsamic Dressing",
        "2 tbsp",
        "370",
      ],
      dinner: [
        "Baked Chicken Thighs",
        "2 thighs",
        "Roasted Vegetables",
        "1 cup",
        "Garlic Herb Butter",
        "2 tbsp",
        "400",
      ],
    },
    {
      _id: "64ef988918debf22de0c3944",
      dietType: "LowCarbs",
      isVeg: "No",
      dayofWeek: "Sunday",
      image: "https://images.unsplash.com/photo-1548699333-2d1912b7913a",
      breakfast: [
        "Classic American Breakfast",
        "1 serving",
        "Hash Browns",
        "1/2 cup",
        "Sausage Links",
        "2 links",
        "Egg",
        "1",
        "450",
      ],
      lunch: [
        "Grilled Chicken Caesar Salad",
        "1 serving",
        "Parmesan Cheese",
        "2 tbsp",
        "Caesar Dressing",
        "2 tbsp",
        "390",
      ],
      dinner: [
        "Pan-Seared Steak",
        "1 steak",
        "Mashed Cauliflower",
        "1 cup",
        "Sautéed Spinach",
        "1 cup",
        "410",
      ],
    },
    {
      _id: "64ef98fb18debf22de0c3946",
      dietType: "LowCarbs",
      isVeg: "No",
      dayofWeek: "Friday",
      image: "https://images.unsplash.com/photo-1588946032510-23b5c77e95ab",
      breakfast: [
        "Spinach and Cheese Omelette",
        "1 serving",
        "Bacon",
        "2 strips",
        "Coffee",
        "1 cup",
        "380",
      ],
      lunch: [
        "Grilled Shrimp Salad",
        "1 serving",
        "Mixed Greens",
        "1 cup",
        "Avocado",
        "1/2",
        "Cilantro Lime Dressing",
        "2 tbsp",
        "340",
      ],
      dinner: [
        "Grilled Pork Ribs",
        "2 ribs",
        "Coleslaw",
        "1 cup",
        "Steamed Green Beans",
        "1/2 cup",
        "410",
      ],
    },
    {
      _id: "64ef98fb18debf22de0c3947",
      dietType: "LowCarbs",
      isVeg: "No",
      dayofWeek: "Saturday",
      image: "https://images.unsplash.com/photo-1600786937392-4af709c42f69",
      breakfast: [
        "Bacon and Cheese Breakfast Burrito",
        "1 burrito",
        "Salsa",
        "2 tbsp",
        "Coffee",
        "1 cup",
        "430",
      ],
      lunch: [
        "Grilled Chicken Wrap",
        "1 wrap",
        "Mixed Greens",
        "1 cup",
        "Tomato",
        "1/2",
        "Ranch Dressing",
        "2 tbsp",
        "370",
      ],
      dinner: [
        "Grilled Ribeye Steak",
        "1 steak",
        "Garlic Mashed Cauliflower",
        "1 cup",
        "Roasted Asparagus",
        "1/2 cup",
        "440",
      ],
    },
  ];

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white w-full max-w-3xl p-8 rounded-xl shadow-xl">
        <div className="text-2xl font-bold mb-6">Your Diets</div>
        {dietData?.map((diet, index) => (
          <DietCard key={index} diet={diet} />
        ))}
      </div>
    </div>
  );
};

export default DietList;
