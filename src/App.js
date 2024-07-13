import React from "react";
import NavBar from "./components/navbar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={<News key="general" pagesize="12" country="in" category="general" />}
        />
        <Route
          path="/general"
          element={<News key="general" pagesize="12" country="in" category="general" />}
        />
        <Route
          path="/technology"
          element={<News key="technology" pagesize="12" country="in" category="technology" />}
        />
        <Route
          path="/science"
          element={<News key="science" pagesize="12" country="in" category="science" />}
        />
        <Route
          path="/health"
          element={<News key="health" pagesize="12" country="in" category="health" />}
        />
        <Route
          path="/business"
          element={<News key="business" pagesize="12" country="in" category="business" />}
        />
        <Route
          path="/sports"
          element={<News key="sports" pagesize="12" country="in" category="sports" />}
        />
        <Route
          path="/entertainment"
          element={<News key="entertainment" pagesize="12" country="in" category="entertainment" />}
        />
      </Routes>
    </Router>
  );
};

export default App;
