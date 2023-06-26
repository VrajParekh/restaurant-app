import React, { useState } from "react";
import "./style.css";
import Menu from "./components/Api";
import Card from "./components/Card";
import Navbar from "./components/Navbar";

const uniqueCategoryList = [
  //data structure to store unique category
  ...new Set(
    Menu.map((item) => {
      return item.category;
    })
  ),
  "All",
];
// console.log(uniqueCategoryList);

function App() {
  const [menuData, setMenuData] = useState(Menu);
  // console.log(menuData);

  const filterCategory = (category) => {
    if (category === "All") {
      setMenuData(Menu);
      return;
    }

    const updatedList = Menu.filter((item) => {
      return item.category === category;
    });
    setMenuData(updatedList);
  };

  return (
    <>
      <Navbar
        filterCategory={filterCategory}
        categoryList={uniqueCategoryList}
      />
      <Card menuData={menuData} />;
    </>
  );
}

export default App;
