import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchFilter, setSearchFilter] = useState("");
  const [shoppingList, setShoppingList] = useState(items)

  function onChange(event){
    setSearchFilter(event.target.value);
  };
function onItemFormSubmit(newItem){
  setShoppingList([...shoppingList, newItem])
}

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  };

  const itemsToDisplay = shoppingList.filter((item) => {
    const nameItem = item.name.toLowerCase();
    const searchTerm = searchFilter.toLowerCase();
  
    if (selectedCategory === "All") {
      return nameItem.includes(searchTerm);
    }
   

    return (
      item.category === selectedCategory && nameItem.includes(searchTerm)
    );
  
  });

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit}/>
    <Filter onCategoryChange={handleCategoryChange} search ={searchFilter}onSearchChange={onChange}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;