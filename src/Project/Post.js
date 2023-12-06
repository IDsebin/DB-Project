import "./Post.css";

function Post() {
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
      </div>
    </body>
  );
}

export default Post;
