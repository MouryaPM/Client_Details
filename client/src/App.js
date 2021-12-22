import "./App.css";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Home from "./Components/Home/Home";
import AddEdit from "./Components/AddEdit/AddEdit";
import View from "./Components/View/View";
import About from "./Components/About/About";
import Header from "./Components/Header/Header";
function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddEdit />} />
        <Route path="/update/:id" element={<AddEdit />} />
        <Route path="/view/:id" element={<View />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
