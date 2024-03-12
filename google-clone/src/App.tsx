import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import SearchPage from "./pages/SearchPage";
import "./firebase";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { useEffect, useState } from "react";

interface Result {
  id: string;
  url: string;
  title: string;
}

function App() {
  let [results, setResults] = useState<Result[]>([]);

  const db = getFirestore();

  const getDataFromFirestore = async () => {
    const q = query(
      collection(db, "results"),
      where("title", "==", "Facebook")
    );
    const querySnapshot = await getDocs(q);
    const documents: Result[] = [];
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      console.log(data);
      documents.push({ id: doc.id, url: data.url, title: data.title });
    });
    setResults(documents);
  };

  useEffect(() => {
    getDataFromFirestore();
  }, []);

  console.log(results);

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
