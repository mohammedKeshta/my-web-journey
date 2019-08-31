import React, { Component } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import FourOhFour from "./FourOhFour";
import { getArticle } from "../util/ArticlesAPI";

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

              {article.comments &&
                article.comments.map(comment => (
                  <div className="card card-white post mb-5">
                    <div className="post-heading">
                      <div className="float-left image">
                        <img
                          src={`http://bootdey.com/img/Content/user_1.jpg`}
                          className="img-circle avatar"
                          alt={comment.username}
                        />
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
                ))}
            </div>
          </div>
        )}
      </>
    );
  }
}

export default ArticlePage;
