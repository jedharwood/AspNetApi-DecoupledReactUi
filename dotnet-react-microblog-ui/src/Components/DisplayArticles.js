import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as articlesSelectors from "../Selectors/Articles";
import Popup from "reactjs-popup";
import * as articlesActions from "../Actions/Articles";

const buildCard = (a, fetchArticleById) => {
  return (
    <div className="article-card col-12 rounded d-flex flex-column h-auto p-3" onClick={() => fetchArticleById(a.id)}>
      <h3 className="overflow-hidden">{a.title}</h3>
      <p>{a.author.name}</p>
    </div>
  );
};

const generateArticleCards = (props) => {
  return props.articles.map((a) => {
    return (
      <Popup trigger={buildCard(a, props.fetchArticleById)} position="bottom center" on="hover" key={a.title}>
        <div className="tool-tip p-2 rounded mx-4">{a.subtitle}</div>
      </Popup>
    );
  });
};

const DisplayArticles = (props) => {
  return (
    <div className="d-flex align-items-center justify-content-center py-4 px-5">
      <div className="w-75">
        <div className="text-dark-gray text-center mb-4">
          <h2>A collection of Stewart Lee columns from the Guardian</h2>
          <p className="mt-2">...or the first paragraph thereof, anyways.</p>
        </div>
        <div className="container-fluid">
          <div className="row gy-4">{generateArticleCards(props)}</div>
        </div>
      </div>
    </div>
  );
};

DisplayArticles.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      author: PropTypes.shape({
        authorId: PropTypes.number,
        name: PropTypes.string,
      }),
      id: PropTypes.number,
      subtitle: PropTypes.string,
      title: PropTypes.string,
    })
  ),
  fetchArticleById: PropTypes.func.isRequired,
  article: PropTypes.shape({
    articleId: PropTypes.number,
    author: PropTypes.shape({
      authorId: PropTypes.number,
      name: PropTypes.string,
    }),
    authorId: PropTypes.number,
    content: PropTypes.string,
    subtitle: PropTypes.string,
    title: PropTypes.string,
  }),
};

const mapStateToProps = (state) => ({
  articles: articlesSelectors.getArticles(state),
  article: articlesSelectors.getArticle(state),
});

const mapDispatchToProps = {
  fetchArticleById: articlesActions.fetchArticleById,
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayArticles);
