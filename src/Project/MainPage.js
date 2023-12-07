import React, { useState, useEffect } from "react";
import "./MainPage.css";
import { Link } from "react-router-dom";
import axios from "axios";

function MainPage() {
  const [data, setData] = useState([]);
  //const useParams

  async function fetchContent() {
    try {
      const response = await axios.get(
        "http://localhost:8080/project-articles?projectId=30"
      );
      console.log(response);
      setData(response.data);
    } catch {}
  }

  useEffect(() => {
    fetchContent();
  }, []);

  return (
    <div className="mainPage_box">
      <div className="mainPage_include">
        <h1>프로젝트 아이디를 입력하세요</h1>
        <input
          className="mainPage_input"
          placeholder="프로젝트 아이디를 입력하세요"
        />
        <br />
        <br />
        <Link to={`/Project/${data.projectId}`} className="mainPage_button">
          확인
        </Link>
      </div>
    </div>
  );
}

export default MainPage;
