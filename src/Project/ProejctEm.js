import "./ProjectEm.css";
import { useState,useEffect} from "react";
import axios from "axios";

function ProjectEm() {

  const [data,setData] = useState([]);

  async function fetchContent() {
    try {
      const response = await axios.get("http://localhost:8080/project-employees?projectId=3");
      console.log(response);
      setData(response.data); 
    } catch {}
  }

  useEffect(() => {
    fetchContent(); 
  }, []); 

  return (
    <body>
      <div className="ProjectEm_box">
        <p className="ProjectEm_title">프로젝트 투입 직원</p>
        <hr />
        <ul className="projectEm_ul">
          <li className="projectidEm_li">ID</li>
          <li className="projectnameEm_li">이름</li>
          <li className="projectseEm_li">주민등록번호</li>
          <li className="projectfinalEm_li">최종학력</li>
        </ul>
        {data.map((datas) => (
          <ul className="projectEmdata_ul">
          <li className="projectidEmdata_li">{datas.employeeId}</li>
          <li className="projectnameEmdata_li">{datas.name}</li>
          <li className="projectseEmdata_li">{datas.socialSecurityNumber}</li>
          <li className="projectfinalEmdata_li">{datas.education}</li>
          <div className="project_line"></div>
        </ul>
        
        ))}
        
    
        
        
      </div>
    </body>
  );
}

export default ProjectEm;
