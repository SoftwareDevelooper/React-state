import Item from "./Item";
import NoItem from "./NoItem";

export default function ListItem({ urunler, onDeleteItem, onToggleItem }) {
  return (
    <ul className="shopping-list list-unstyled">
      {urunler.length > 0 ? (
        urunler.map((i, index) => (
          <Item
            urun={i}
            key={i.id}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
          />
        ))
      ) : (
        <NoItem />
      )}
    </ul>
  );
}
