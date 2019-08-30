import * as React from "react";
import articles from '../data/data';
import ArticlesListComponent from "../components/ArticleListComponent";

const ArticlesListPage = () => (
  <>
    <ArticlesListComponent articles={articles}/>
  </>
);

export default ArticlesListPage;
