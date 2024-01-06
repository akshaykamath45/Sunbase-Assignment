import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import AddCustomer from "./components/AddCustomer";
import ViewCustomers from "./components/ViewCustomers";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/add-customer" element={<AddCustomer />}></Route>
        <Route path="/view-customers" element={<ViewCustomers />}></Route>
      </Routes>
    </div>
  );
}

export default App;
