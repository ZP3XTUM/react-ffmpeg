import React from "react";
import { Store } from "@tanstack/store";
import { useStore } from "@tanstack/react-store";

const chartStore = new Store({
  data: Array.from({ length: 10 }, (_, i) => ({
    x: i,
    y: Math.random() * 100,
  })),
});

const DynamicChart = () => {
  const data = useStore(chartStore, (state) => state.data);

  const addDataPoint = () => {
    chartStore.setState((state) => ({
      data: [...state.data, { x: state.data.length, y: Math.random() * 100 }],
    }));
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Dynamic Chart</h2>
      <button
        onClick={addDataPoint}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Add Data Point
      </button>
      <div className="mt-4">
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    </div>
  );
};

export default DynamicChart;
