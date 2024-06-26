import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routes } from "./routes";

function App() {
  const getComponent = (component) => {
    return React.createElement(component, {});
  };
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={getComponent(route.component)}
            />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
