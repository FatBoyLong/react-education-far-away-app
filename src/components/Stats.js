function Stats({ items }) {
  if (!items.length)
    return (
      <footer className="stats">
        <p>Start adding some items to your packing list 🐱‍🐉</p>
      </footer>
    );

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentOfPacked = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentOfPacked === 100
          ? "You got everything! You ready to go ✈"
          : `you have ${numItems} items on your list, and you are already packed${" "}
          ${numPacked} (${percentOfPacked})%`}
      </em>
    </footer>
  );
}

export default Stats;
