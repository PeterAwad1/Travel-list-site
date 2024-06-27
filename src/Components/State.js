export default function State({ items }) {
  const numItems = items.length;
  const itemPacked = items.filter((items) => items.packed).length;
  const percentage = Math.trunc((itemPacked / numItems) * 100);
  if (numItems === 0)
    return (
      <footer className="stats">
        <em>Start adding some items 😊</em>{" "}
      </footer>
    );
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? `All items are packed ✈️`
          : `You have ${numItems} items on your list, and you already packed
        ${itemPacked} (${percentage}%)`}
      </em>
    </footer>
  );
}
