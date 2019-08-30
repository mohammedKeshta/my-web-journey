import * as React from "react";
import moment from "moment";
import {NavLink} from "react-router-dom";

const ArticlesListComponent = ({ articles }) => (
  <div>
    <ol className="list-unstyled mb-0">
      {(articles || []).map(article => (
        <li key={article.id}>
          <h2 className="blog-post-title">
            <NavLink to={`/article/${article.id}`}>{article.title} </NavLink>
          </h2>
          <p className="blog-post-meta">
            {moment(new Date(article.date)).format("MMMM Do YYYY, h:mm")}
              &nbsp; by <span className="text-info">{article.name}</span>
          </p>
          <p>{article.content.substring(0, 150) + "...."}</p>
          <hr  className='divider'/>
        </li>
      ))}
    </ol>
  </div>
);

export default ArticlesListComponent;
