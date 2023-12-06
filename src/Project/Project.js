import { useState, useEffect } from "react";
import "./Project.css";
import { Link } from "react-router-dom";
import axios from "axios";

function Project() {
  const [data, setData] = useState("");

  async function fetchContent() {
    try {
      const response = await axios.get("http://localhost:3000/project/30");
      console.log(response);
      setData(response.data); 
    } catch {}
  }

  useEffect(() => {
    fetchContent(); 
  }, []); 

  return (
    <body>
      <div className="project_box">
        <div className="project_header">
          <div className="project_header1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 33 33"
              fill="none"
            >
              <circle cx="16.5" cy="16.5" r="16.5" fill="#D2691E" />
            </svg>
            <p className="project_name">{data.projectName}</p>
            <p style={{ color: "gray" }}>아이디 값:{data.projectId}</p>
          </div>
          <div className="preject_header2">
            <p>착수 일자:{data.startData}</p>
            <p>종료 일자:{data.endDate}</p>
            <p>발주처 : {data.customer.name}</p>
          </div>
          <hr />
          <div className="project_header3">
            <ul className="project_ul">
              <li className="project_li">ID</li>
              <li className="project_li">이름</li>
              <li className="project_li">이메일</li>
            </ul>
          </div>
        </div>
        <Link
          to="/ProjectEM"
          className="project_part2"
          style={{ textDecoration: "none" }}
        >
          프로젝트 투입 직원
        </Link>
        <div className="project_part3">
          <Link className="project_smallbox" style={{ textDecoration: "none" }}>
            위험 관리
          </Link>
          <Link className="project_smallbox" style={{ textDecoration: "none" }}>
            변경 관리
          </Link>
          <Link
            to="/Budget"
            className="project_smallbox"
            style={{ textDecoration: "none" }}
          >
            예산 관리
          </Link>
        </div>
        <Link
          to="/Post"
          className="project_part4"
          style={{ textDecoration: "none" }}
        >
          게시글
        </Link>
      </div>
    </body>
  );
}

export default Project;
