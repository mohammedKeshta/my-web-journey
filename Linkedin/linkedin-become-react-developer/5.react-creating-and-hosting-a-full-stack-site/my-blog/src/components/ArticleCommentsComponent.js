import * as React from "react";

const ArticlesCommentComponent = ({ comment }) => (
  <div className="card card-white post mb-5">
    <div className="post-heading">
      <div className="float-left image">
        <img src={`http://bootdey.com/img/Content/user_1.jpg`} className="img-circle avatar" alt={comment.username} />
      </div>
      <div className="float-left meta">
        <div className="title h5">
          <strong>
            <b>{comment.username}</b>
          </strong>
          made a post.
        </div>
        <h6 className="text-muted time">{Math.floor(Math.random() * 10)} minute ago</h6>
      </div>
    </div>
    <div className="post-description mb-5">
      <p>{comment.text}</p>
    </div>
    <hr />
  </div>
);

export default ArticlesCommentComponent;
