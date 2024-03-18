import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import SearchPage from "./pages/SearchPage";
import "./firebase/firebase";
import SeedFirestore from "./pages/SeedFirestore";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/seed" element={<SeedFirestore />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
