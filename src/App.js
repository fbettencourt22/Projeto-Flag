import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Watchlist } from "./components/Watchlist/Watchlist";
import { Watched } from "./components/Watched/Watched";
import { Add } from "./components/Add/Add";

import "./App.css";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route exact path="/" element={<Watchlist />}></Route>
        <Route path="/watched" element={<Watched />}></Route>
        <Route path="/add" element={<Add />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
