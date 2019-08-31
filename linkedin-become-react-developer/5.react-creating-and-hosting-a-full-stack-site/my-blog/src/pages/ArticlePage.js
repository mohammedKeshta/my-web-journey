import * as React from "react";
import ArticlesListComponent from "../components/ArticleListComponent";
import articles from "../../../my-blog-backend/data/data";
import { NavLink } from "react-router-dom";
import moment from "moment";
import FourOhFour from "./FourOhFour";

const ArticlePage = ({ match }) => {
  const id = parseInt(match.params.id);
  const article = (articles || []).find(article => article.id === id);
  const remain_articles = (articles || []).filter(article => article.id !== id);
  return (
    <>
      {!article && <FourOhFour />}
      {article && (
        <div className='row'>
          <div className="col-md-8">
            <h2 className="blog-post-title">
              <NavLink to={`/article/${article.id}`}>{article.title} </NavLink>
            </h2>
            <p className="blog-post-meta">
              {moment(new Date(article.date)).format("MMMM Do YYYY, h:mm")}
              &nbsp; by <span className="text-info">{article.name}</span>
            </p>
            <p>{article.content}</p>
          </div>
          <div className="col-md-4">
            <aside>
              <h3 className="font-weight-bold font-italic">Articles</h3>
              <ArticlesListComponent articles={remain_articles} />
            </aside>
          </div>
        </div>
      )}
    </>
  );
};

export default ArticlePage;
