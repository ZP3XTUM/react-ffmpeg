import React from "react";
import { Store } from "@tanstack/store";
import { useStore } from "@tanstack/react-store";

const themeStore = new Store({ theme: "light" });

const ThemeSwitcher = () => {
  const theme = useStore(themeStore, (state) => state.theme);

  const toggleTheme = () =>
    themeStore.setState((state) => ({
      theme: state.theme === "light" ? "dark" : "light",
    }));

  return (
    <div
      className={`p-4 ${
        theme === "light" ? "bg-white text-black" : "bg-gray-800 text-white"
      }`}
    >
      <h2 className="text-2xl font-bold">Theme Switcher</h2>
      <button
        onClick={toggleTheme}
        className="px-4 py-2 mt-4 bg-blue-500 text-white rounded"
      >
        Toggle Theme
      </button>
    </div>
  );
};

export default ThemeSwitcher;
