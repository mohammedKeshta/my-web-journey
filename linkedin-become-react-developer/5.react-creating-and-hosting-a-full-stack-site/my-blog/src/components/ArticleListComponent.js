import * as React from "react";
import moment from "moment";

const ArticlesListComponent = ({ articles }) => (
  <div className="p-4">
    <h4 className="font-italic">Articles</h4>
    <ol className="list-unstyled mb-0">
      <li>
        {(articles || []).map(article => (
          <>
            <h2 className="blog-post-title">{article.title}</h2>
            <p className="blog-post-meta">
              {moment(new Date(article.date)).format("MMMM Do YYYY, h:mm:ss a")}
              by <span className="text-info">{article.name}</span>
            </p>
            <p>{article.content.substring(0, 150) + "...."}</p>
          </>
        ))}
      </li>
    </ol>
  </div>
);

export default ArticlesListComponent;
