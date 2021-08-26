import React, { useState } from "react";
import Counter from "./counter";

const Counters = () => {
  const initialState = [
    { value: 0, id: 1, name: "Ложка" },
    { value: 4, id: 2, name: "Вилка" },
    { value: 0, id: 3, name: "Тарелка" },
    { value: 0, id: 4, name: "Стартовый набор минималиста" },
    { value: 0, id: 5, name: "Ненужные вещи" },
  ];
  const [counters, setCounters] = useState(initialState);

  const handleDelete = (counterId) => {
    const newCounters = counters.filter((c) => c.id !== counterId);
    console.log(counterId);
    setCounters(newCounters);
  };

  const handleReset = () => setCounters(initialState);

  const handleIncrement = (counterId) => {
    const elementToIncrement = counters.find(
      (counter) => counter.id === counterId
    );
    const incrementedElement = elementToIncrement;
    incrementedElement.value++;
    const newCounters = [...counters];
    newCounters.splice(
      counters.indexOf(elementToIncrement),
      1,
      incrementedElement
    );
    console.log(newCounters);
    setCounters(newCounters);
  };

  const handleDecrement = (counterId) => {
    const elementToDecrement = counters.find(
      (counter) => counter.id === counterId
    );
    if (elementToDecrement.value <= 0) {
      return;
    }
    const decrementedElement = elementToDecrement;
    decrementedElement.value -= 1;
    const newCounters = [...counters];
    newCounters.splice(
      counters.indexOf(elementToDecrement),
      1,
      decrementedElement
    );
    setCounters(newCounters);
  };

  return (
    <div>
      <button className="btn btn-primary btn-sm m-2" onClick={handleReset}>
        Сброс
      </button>
      {counters.map((counter) => (
        <Counter
          key={counter.id}
          onDelete={handleDelete}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          {...counter}
        ></Counter>
      ))}
    </div>
  );
};

export default Counters;
