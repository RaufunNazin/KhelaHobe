import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "./index.css";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Dashboard from "./pages/Dashboard";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="App font-body" id="outer-container">
      <div id="page-wrap">
        <BrowserRouter>
          <Sidebar id="sidebar" />
          <Routes>
            <Route path="/">
              <Route index element={<Dashboard />} />
              <Route path="dashboard" element={<Dashboard />}></Route>
              <Route path="login" element={<Login />}></Route>
              <Route path="register" element={<Registration />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
