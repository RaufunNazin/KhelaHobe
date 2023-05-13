import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "./index.css";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="register" element={<Registration />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
