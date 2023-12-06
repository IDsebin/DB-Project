import pic from "../Pic/LOG IN.png";
import "./HomeLogin.css";
import { Link } from "react-router-dom";

function HomeLogin() {
  return (
    <div className="HomeLogin_main">
      <img className="HomeLogin_log" src={pic} />
      <div className="HomeLogin_Location">
        <div className="HomeLogin_border">
          <div className="HomeLogin_content">
            <input className="HomeLogin_input" placeholder="ID" />
            <input className="HomeLogin_input" placeholder="PW" />
            <button className="HomeLogin_login">로그인</button>
            <br />
            <Link className="HomeLogin_pwfind">비밀번호 찾기</Link>
            <br />
            <Link to={"./signIn"} className="HomeLogin_sigin">
              회원가입
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeLogin;
