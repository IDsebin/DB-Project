import "./Post.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

function Post() {
  const [data, setData] = useState([]);
  const { projectId } = useParams();

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
    <body>
      <div className="post_box">
        <p className="post_title">게시글</p>
        <hr />
        <ul className="post_ul">
          <li className="post_li">ID</li>
          <li className="post_li">제목</li>
          <li className="post_li">작성자</li>
          <li className="post_li">댓글 수</li>
        </ul>
        <br />
        {data.map((datas) => (
          <ul className="post_ul">
            <Link to={`/Postinfo/${datas.postId}`}>
              <li className="postid_li">{datas.postId}</li>
              <li className="posttitle_li">{datas.title}</li>
              <li className="postem_li">{datas.employeeId}</li>
              <li className="postcc_li">{datas.commentCount}</li>
            </Link>
            <div className="project_line"></div>
          </ul>
        ))}
      </div>
    </body>
  );
}

export default Post;
