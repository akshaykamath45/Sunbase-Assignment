import "./App.css";
import { Routes, Route } from "react-router-dom";
import  Login  from "./components/Login";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
