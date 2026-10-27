
import { useState } from "react";
import {
  Link,
  Routes,
  Route,
  NavLink,
  Navigate
} from "react-router-dom";

import Home from "./pages/Home";
import Tasks from "./pages/Tasks";
import About from "./pages/About";
import "./App.css";

const initialTasks = [
  {
    id: 1,
    title: "Learn React",
    description: "Understand components and JSX.",
  },
  {
    id: 2,
    title: "Practice useState",
    description: "Learn how React manages state.",
  },
];

function App() {
  const [tasks, setTasks] = useState(initialTasks);

  return (
    <div className="App">
      <header className="app-header">
        <h1 className="logo">Task Notes</h1>

        <nav className="navbar">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/tasks"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            My Tasks
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            About
          </NavLink>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/tasks"
          element={
            <Tasks
              tasks={tasks}
              setTasks={setTasks}
            />
          }
        />

        <Route path="/about" element={<About />} />

        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />
      </Routes>
    </div>
  );
}

export default App;
