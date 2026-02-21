export default function ClearButton({ onDeleteItem }) {
  function handleDeleteAll() {
    onDeleteItem();
  }

  return (
    <button
      className="btn btn-outline-danger clear"
      type="submit"
      onClick={handleDeleteAll}
    >
      Clear
    </button>
  );
}
