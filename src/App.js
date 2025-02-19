import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="container">
          <TextForm />
        </div>
        <Routes>
          <Route path="/about" element={<div className="text-center mt-4">About Page Coming Soon...</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
