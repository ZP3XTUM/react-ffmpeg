import React from "react";
import { Store } from "@tanstack/store";
import { useStore } from "@tanstack/react-store";

const counterStore = new Store({ count: 0 });

const increment = () =>
  counterStore.setState(() => ({
    count: counterStore.state.count + 1,
  }));

const decrement = () =>
  counterStore.setState(() => ({
    count: counterStore.state.count - 1,
  }));

const Counter = () => {
  const count = useStore(counterStore, (state) => state.count);

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Counter</h2>
      <div className="flex items-center space-x-4">
        <button
          onClick={decrement}
          className="px-4 py-2 bg-red-500 text-white rounded"
        >
          Decrement
        </button>
        <span className="text-xl">{count}</span>
        <button
          onClick={increment}
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          Increment
        </button>
      </div>
    </div>
  );
};

export default Counter;
