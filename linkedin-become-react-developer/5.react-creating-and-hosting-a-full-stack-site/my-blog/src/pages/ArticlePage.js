import React, { Component } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import FourOhFour from "./FourOhFour";
import { getArticle } from "../util/ArticlesAPI";
import ArticlesCommentComponent from "../components/ArticleCommentsComponent";

class ArticlePage extends Component {
  state = {
    article: {}
  };

  componentDidMount() {
    const { match } = this.props;
    const name = match.params.name;
    getArticle(name).then(article => {
      this.setState({ article });
    });
  }

  render() {
    const { article } = this.state;
    return (
      <>
        {!article && <FourOhFour />}
        {article && (
          <div className="row">
            <div className="col-md-12">
              <h2 className="blog-post-title">
                <Link to={`/article/${article.name}`}>{article.title} </Link>
              </h2>
              <p className="blog-post-meta">
                {moment(new Date(article.date)).format("MMMM Do YYYY, h:mm")}
                &nbsp; by <span className="text-info">{article.name}</span>
              </p>
              <p>{article.content}</p>

              <hr />

              {article.comments && article.comments.map(comment => <ArticlesCommentComponent comment={comment} />)}
            </div>
          </div>
        )}
      </>
    );
  }
}

export default ArticlePage;
