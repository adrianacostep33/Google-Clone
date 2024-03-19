import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./firebase/firebase";
import Home from "./pages/Home";
import SearchPage from "./pages/SearchPage";
import "./App.css";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
