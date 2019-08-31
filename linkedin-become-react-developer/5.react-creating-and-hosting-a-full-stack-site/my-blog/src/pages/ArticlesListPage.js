import React, { Component } from "react";
import ArticlesListComponent from "../components/ArticleListComponent";
import { getAll, upvote, downvote, remove } from "../util/ArticlesAPI";

class ArticlesListPage extends Component {
  state = {
    articles: []
  };

  componentDidMount() {
    this.getArticle();
  }

  getArticle = () => {
    getAll().then(articles => {
      this.setState({ articles: articles });
    });
  };

  handleUpVote = name => {
    upvote(name).then(() => this.getArticle());
  };

  handleDownVote = name => {
    downvote(name).then(() => this.getArticle());
  };

  handleDelete = name => {
    remove(name).then(() => this.getArticle());
  };

  render() {
    const { articles } = this.state;
    return (
      <ArticlesListComponent
        articles={articles}
        handleUpVote={this.handleUpVote}
        handleDownVote={this.handleDownVote}
        handleDelete={this.handleDelete}
      />
    );
  }
}

export default ArticlesListPage;
