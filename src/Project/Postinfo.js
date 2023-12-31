import React from "react";
import { useParams } from "react-router-dom";
import "./Postinfo.css";
import { useState, useEffect } from "react";
import axios from "axios";

function Postinfo() {
  const [data, setData] = useState([]);
  const [comments, setComments] = useState([]);
  const { postId } = useParams(); 

  console.log(postId);

  async function fetchContent() {
    try {
      const response = await axios.get(`http://localhost:8080/post/${postId}`);
      console.log(response);
      setData(response.data);
      setComments(response.data.comments);
    } catch (error) {
      console.error("데이터를 불러오는 데 실패했습니다.", error);
    }
  }
  
    useEffect(() => {
      fetchContent(); 
    }, []); 

    return (
        <div className="postinfo_big">
        <div className="postinfo_box">
            <p>{data.content}</p>
        </div>
        <div className="postinfo_infor">
            <p className="postinfo_id">프로젝트 아이디:{data.postId}</p>
            <p className="postinfo_title">{data.title}</p>
            <p className="postinfo_emid">직원 번호: {data.employId}</p>
        </div>
        <div className="postinfo_commnets">
            <p className="postinfo_commentstitle"><u>댓글</u></p>
            {comments.map((comment) => (
                <ul className="postinfo_ul">    
                <li className="postinfo_em">{comment.employeeId}</li>
                <li className="postinfo_content">{comment.content}</li>
                <div className="project_line"></div>
                </ul>
            ))}
        </div>
        </div>
    )
}

export default Postinfo;