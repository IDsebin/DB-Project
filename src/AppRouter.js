import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeLogin from "./Login/HomeLogin";
import Signin from "./Login/Signin";
import Project from "./Project/Project";
import ProjectEm from "./Project/ProejctEm";
import Budget from "./Project/Budget";
import Post from "./Project/Post";


function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Project />}></Route>
        <Route path="/signIn" element={<Signin />} />
        <Route path="/ProjectEM" element={<ProjectEm/>}/>
        <Route path="/Budget" element={<Budget/>}/>
        <Route path="/Post" element={<Post/>}/>
      </Routes>
      
    </Router>
  );
}

export default AppRouter;
