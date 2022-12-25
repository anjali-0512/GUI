import "./App.css";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import UserHome from "./Components/UserHome";
import Profile from "./Components/Profile";
import Challenges from "./Components/Challenges";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<UserHome />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/challenges" element={<Challenges />} />
      </Routes>
    </div>
  );
}

export default App;
