import * as React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import { FaRegThumbsUp, FaRegThumbsDown, FaRegTimesCircle } from "react-icons/fa";

const ArticlesListComponent = ({ articles, handleUpVote, handleDownVote, handleDelete }) => (
  <div>
    <ol className="list-unstyled mb-0">
      {(articles || []).map(article => (
        <li key={article._id}>
          <div className="row">
            <div className="col-md-1" style={{ fontSize: 30 + "px", color: "#606060", textAlign: "center" }}>
              <FaRegThumbsUp className="col-md-12" onClick={() => handleUpVote(article.name)} />
              <span className="col-md-12">{article.upvote}</span>
              <FaRegThumbsDown className="col-md-12" onClick={() => handleDownVote(article.name)} />
            </div>
            <div className="col-10">
              <h2 className="blog-post-title">
                <Link to={`/article/${article.name}`}>{article.title} </Link>
              </h2>
              <p className="blog-post-meta">
                {moment(new Date(article.date)).format("MMMM Do YYYY, h:mm")}
                &nbsp; by <span className="text-info">{article.name}</span>
              </p>
              <p>{article.content.substring(0, 150) + "...."}</p>
            </div>
            <div className="col-1">
              <FaRegTimesCircle className="col-md-12" onClick={() => handleDelete(article.name)} />
            </div>
          </div>
          <hr className="divider" />
        </li>
      ))}
    </ol>
  </div>
);

export default ArticlesListComponent;
