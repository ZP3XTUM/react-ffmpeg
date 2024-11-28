import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Counter from "./components/Counter";
import TodoList from "./components/TodoList";
import ThemeSwitcher from "./components/ThemeSwitcher";
import Authentication from "./components/Authentication";
import DynamicChart from "./components/DynamicChart";

const App = () => {
  return (
    <Router>
      <div className="flex min-h-screen h-full">
        {/* Sidebar */}
        <nav className="w-64 bg-gray-100 p-4">
          <h1 className="text-xl font-bold mb-4">Demos</h1>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="text-blue-500 hover:underline">
                Counter
              </Link>
            </li>
            <li>
              <Link to="/todo" className="text-blue-500 hover:underline">
                Todo List
              </Link>
            </li>
            <li>
              <Link to="/theme" className="text-blue-500 hover:underline">
                Theme Switcher
              </Link>
            </li>
            <li>
              <Link to="/auth" className="text-blue-500 hover:underline">
                Authentication
              </Link>
            </li>
            <li>
              <Link to="/chart" className="text-blue-500 hover:underline">
                Dynamic Chart
              </Link>
            </li>
          </ul>
        </nav>

        {/* Main Content */}
        <div className="flex-1 p-6 bg-gray-50">
          <Routes>
            <Route path="/" element={<Counter />} />
            <Route path="/todo" element={<TodoList />} />
            <Route path="/theme" element={<ThemeSwitcher />} />
            <Route path="/auth" element={<Authentication />} />
            <Route path="/chart" element={<DynamicChart />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
