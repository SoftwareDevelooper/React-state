import { useState } from "react";

export default function FilterButtons({
  showCompleted,
  showUncompleted,
  showAll,
}) {
  const [filterButton, setfilterButton] = useState("all");
  return (
    <div className="filter-buttons border rounded p-3 mb-3">
      <button
        item-filter="all"
        className={` me-1 btn  ${filterButton == "all" ? "btn-primary" : "btn-secondary"}`}
        onClick={() => {
          showAll();
          setfilterButton("all");
        }}
      >
        All
      </button>
      <button
        item-filter="uncompleted"
        className={` me-1 btn  ${filterButton == "incomplete" ? "btn-primary" : "btn-secondary"}`}
        onClick={() => {
          showUncompleted();
          setfilterButton("incomplete");
        }}
      >
        Incomplete
      </button>
      <button
        item-filter="completed"
        className={` me-1 btn  ${filterButton == "completed" ? "btn-primary" : "btn-secondary"}`}
        onClick={() => {
          showCompleted();
          setfilterButton("completed");
        }}
      >
        Completed
      </button>
    </div>
  );
}
