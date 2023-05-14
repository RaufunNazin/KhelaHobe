import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "./index.css";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Home from "./pages/Home";
import Sidebar from "./components/Sidebar";
import Events from "./pages/Events";
import Games from "./pages/Games";
import Profile from "./pages/Profile";
import { useGlobalState } from "./UserContext";
import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useGlobalState("isLoggedIn");
  const [userInfo, setUserInfo] = useGlobalState("user");
  const [user, setUser] = useState([]);

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
  }, []);

  useEffect(() => {
    login().then(() => setLoading(false));
  }, [user]);

  const login = async () => {
    for (let i = 0; i < user.length; i++) {
      if (localStorage.getItem("email") === user[i].email) {
        if (localStorage.getItem("pass") === user[i].password) {
          setIsLoggedIn(true);
          setUserInfo({
            name: user[i].name,
            mail: user[i].email,
            phone: user[i].phone,
          });
        }
      }
    }
  };
  if (loading) return <br />;
  else
    return (
      <div className="App font-body" id="outer-container">
        <div id="page-wrap">
          <BrowserRouter>
            <Sidebar id="sidebar" />
            <Routes>
              <Route path="/">
                <Route index element={<Home />} />
                <Route path="home" element={<Home />}></Route>
                <Route path="login" element={<Login />}></Route>
                <Route path="register" element={<Registration />}></Route>
                <Route path="profile" element={<Profile />}></Route>
                <Route path="events" element={<Events />}></Route>
                <Route path="mygames" element={<Games />}></Route>
              </Route>
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    );
}

export default App;
