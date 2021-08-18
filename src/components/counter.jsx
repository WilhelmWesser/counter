import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const tags = ["tag1", "tag2", "tag3"];
  const formCount = () => {
    return count === 0 ? "Zero" : count;
  };

  //   const styles = {
  //     fontSize: "10px",
  //     fontWeight: "bold"
  //   };
  // <span style={styles}></span>

  const getBadgeClasses = () => {
    let classes = "badge m-2 bg-";
    classes += count === 0 ? "danger" : "primary";
    return classes;
  };
  const renderTags = () => {
    if (tags.length === 0) return "There are no elements in the array";
    return tags.map((tag) => <li key={String(tags.indexOf(tag))}>{tag}</li>);
  };
  const handleIncrement = (productId) => {
    console.log(productId);
    setCount(count + 1);
  };
  const handleDecrement = () => {
    if (count === 0) {
      return;
    } else {
      setCount(count - 1);
    }
  };

  return (
    <>
      {" "}
      {tags.length === 0 && "No tags found"}
      {renderTags()}
      <span className={getBadgeClasses()}>{formCount()}</span>
      <button
        onClick={() => {
          handleIncrement({ id: 1 });
        }}
        className="btn btn-secondary btn-sm"
      >
        Increment
      </button>
      <button onClick={handleDecrement} className="btn btn-secondary btn-sm">
        Decrement
      </button>{" "}
    </>
  );
};

export default Counter;
