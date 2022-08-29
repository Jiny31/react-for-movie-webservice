import {useState, useEffect} from "react";
import Movie from "./components/Movie.js";
import Home from "./routes/Home.js";
import Detail from "./routes/Detail.js";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return <Router>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/movie/:id" element={<Detail />}></Route>
    </Routes>
  </Router>;
}

export default App;