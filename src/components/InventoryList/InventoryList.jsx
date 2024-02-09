import "./InventoryList.css";

export default function InventoryList(props) {
  return (
    <div className="inventory-list">
      <h2>{props.title}</h2>
      <ul>
        {props.inventory.map((item) => (
          <li key={item._id}>
            <p>{item.name}</p>
            <p>Cost :{item.cost}</p>
            {props.handleAddItem ? (
              <button onClick={() => props.handleAddItem(item)}>
                Add item
              </button>
            ) : (
              <button onClick={() => props.handleRemoveItem(item)}>
                Remove Item
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
