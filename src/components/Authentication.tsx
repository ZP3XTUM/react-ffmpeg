import React from "react";
import { Store } from "@tanstack/store";
import { useStore } from "@tanstack/react-store";

const authStore = new Store({ isAuthenticated: false });

const Authentication = () => {
  const isAuthenticated = useStore(authStore, (state) => state.isAuthenticated);

  const login = () => authStore.setState(() => ({ isAuthenticated: true }));
  const logout = () => authStore.setState(() => ({ isAuthenticated: false }));

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Authentication</h2>
      <p>{isAuthenticated ? "Logged In" : "Logged Out"}</p>
      <div>
        {isAuthenticated ? (
          <button
            onClick={logout}
            className="px-4 py-2 bg-red-500 text-white rounded"
          >
            Logout
          </button>
        ) : (
          <button
            onClick={login}
            className="px-4 py-2 bg-green-500 text-white rounded"
          >
            Login
          </button>
        )}
      </div>
    </div>
  );
};

export default Authentication;
