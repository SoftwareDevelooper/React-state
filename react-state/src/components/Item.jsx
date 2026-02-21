export default function Item({ urun, onDeleteItem, onToggleItem }) {
  return (
    <div>
      <li className="border rounded p-2 mb-1 d-flex">
        <input
          type="checkbox"
          className="form-check-input"
          checked={urun.completed}
          onChange={() => onToggleItem(urun.id)}
        />
        <div
          className="item-name"
          style={
            urun.completed
              ? {
                  textDecoration: "line-through",
                  color: "#999",
                }
              : {}
          }
        >
          {urun.name}
        </div>
        <i
          className="fs-3 bi bi-x text-danger delete-icon"
          style={{ cursor: "pointer" }}
          onClick={() => {
            onDeleteItem(urun.id);
          }}
        ></i>
      </li>
    </div>
  );
}
