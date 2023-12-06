import { useState } from "react";
import "./Signin.css";

function Signin() {
  const [marketing, setMarketing] = useState(false);
  const [manage, setManage] = useState(false);
  const [research, setResearch] = useState(false);
  const [developer, setDeveloper] = useState(false);

  return (
    <div className="Signin_background">
      <div className="Signin_inbox">
        <h1 className="Signin_title">회원가입</h1>
        <hr />
        <div className="Signin_check">
          <label>
            <input
              type="checkbox"
              checked={marketing}
              onChange={() => setMarketing(!marketing)}
            />
            마케팅
          </label>
          <label>
            <input
              type="checkbox"
              checked={manage}
              onChange={() => setManage(!manage)}
            />
            경영관리
          </label>
          <label>
            <input
              type="checkbox"
              checked={research}
              onChange={() => setResearch(!research)}
            />
            연구개발
          </label>
          <label>
            <input
              type="checkbox"
              checked={developer}
              onChange={() => setDeveloper(!developer)}
            />
            개발자
          </label>
          <hr />
        </div>
        <div className="Signin_input">
          <input className="Signin_id" placeholder="ID" />
          <br />
          <input className="Signin_id" placeholder="PW" />
          <br />
          <input className="Signin_id" placeholder="이름" />
          <br />
          <input className="Signin_id" placeholder="주민등록번호" />
          <br />
          <input className="Signin_id" placeholder="최종학력" />
          <br />
          <button className="Signin_btn"> 다음</button>
        </div>
      </div>
    </div>
  );
}

export default Signin;
