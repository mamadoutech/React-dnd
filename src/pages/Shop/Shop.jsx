import { inventoryData } from "../../data/data";
import InventoryList from "../../components/InventoryList/InventoryList";
import { useState } from "react";
import "./Shop.css";
export default function Shop() {
  const [shopInventory, setShopInventory] = useState(inventoryData);
  const [userInventory, setUserInventory] = useState([]);
  function handleRemoveItem(item) {
    setShopInventory([...shopInventory, item]);
    setUserInventory(userInventory.filter((el) => el._id !== item._id));
  }
  function handleAddItem(item) {
    setShopInventory(shopInventory.filter((el) => el._id !== item._id));
    setUserInventory([...userInventory, item]);
  }

  return (
    <>
      <main>
        <h1>Shop</h1>
        <section className="shop-section">
          <InventoryList
            title="Shop Inventory"
            inventory={shopInventory}
            handleAddItem={handleAddItem}
          />
          <InventoryList
            title="User Inventory"
            inventory={userInventory}
            handleRemoveItem={handleRemoveItem}
          />
        </section>
      </main>
    </>
  );
}
