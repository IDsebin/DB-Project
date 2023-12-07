import "./Budget.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function Budget() {
  const [data, setData] = useState([]);
  const { projectId } = useParams();

  async function fetchContent() {
    try {
      const response = await axios.get(
        `http://localhost:8080/management/budget?${projectId}`
      );
      console.log(response);
      setData(response.data);
    } catch {}
  }

  useEffect(() => {
    fetchContent();
  }, []);
  return (
    <body>
      <div>
        <p className="budget_title">예산 관리</p>
        {data.map((datas) => (
          <div className="budget_box">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="33"
              height="33"
              viewBox="0 0 33 33"
              fill="none"
            >
              <path d="M33 0L17 16L0 33V0L33 0Z" fill="#D2691E" />
            </svg>
            <div className="budget_content">
              <p className="budget_id">프로젝트 아이디:{datas.managementId}</p>
              <div className="budget_cost">{datas.content}</div>
              <div className="budget_total">
                <p className="budget_assig">
                  배정 예산: {datas.allocatedBudget}원
                </p>
                <p>사용 금액: {datas.spentAmount}원</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </body>
  );
}
export default Budget;
