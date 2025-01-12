import React from "react";
import ArticleList from "../components/ArticleList"; // Importa il componente ArticleList

const Homepage = ({ articles, onRemoveArticle }) => {
    return (
        <div>
            <h1>Post list:</h1>
            <ArticleList articles={articles} onRemoveArticle={onRemoveArticle} />
        </div>
    );
};

export default Homepage;