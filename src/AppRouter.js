import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeLogin from "./Login/HomeLogin";
import Signin from "./Login/Signin";
import Project from "./Project/Project";
import ProjectEm from "./Project/ProejctEm";
import Budget from "./Project/Budget";
import Post from "./Project/Post";
import Postinfo from "./Project/Postinfo";
import MainPage from "./Project/MainPage";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/Project/:projectId" element={<Project />}></Route>
        <Route path="/signIn" element={<Signin />} />
        <Route path="/ProjectEM/:projectId" element={<ProjectEm />} />
        <Route path="/Budget/:projectId" element={<Budget />} />
        <Route path="/Post/:projectId" element={<Post />} />
        <Route path="/Postinfo/:postId" element={<Postinfo />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
