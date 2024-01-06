import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import AddCustomer from "./components/AddCustomer";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login></Login>}></Route>
        <Route path="/add-customer" element={<AddCustomer />}></Route>
      </Routes>
    </div>
  );
}

export default App;
