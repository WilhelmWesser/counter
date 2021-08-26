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
    setCounters(newCounters);
  };

  const handleReset = () => setCounters(initialState);

  const handleIncrement = (counterId) => {
    const newCounters = [...counters];
    const incrementedElementIndex = counters.findIndex(
      (counter) => counter.id === counterId
    );
    newCounters[incrementedElementIndex].value++;
    setCounters(newCounters);
  };

  const handleDecrement = (counterId) => {
    const newCounters = [...counters];
    const decrementedElementIndex = counters.findIndex(
      (counter) => counter.id === counterId
    );
    if (newCounters[decrementedElementIndex].value > 0) {
      newCounters[decrementedElementIndex].value--;
    }
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
