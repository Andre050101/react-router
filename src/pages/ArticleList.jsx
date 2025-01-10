import React from "react";
import styles from "./ArticleList.module.css"
import { Link } from "react-router-dom";

const ArticleList = ({ articles, onRemoveArticle }) => {
    if (articles.length === 0) {
        return <p className={styles.noArticles}>No articles yet</p>;
    }
    return (
        <>
            <div className="container">
                <ul>
                    {articles.map((article) => (
                        <li key={article.id}>
                            <div>
                                <h3>{article.title}</h3>
                                <p><strong>Author:</strong> {article.author}</p>
                                <p><strong>Status:</strong> {article.status}</p>
                                <p><strong>Image:</strong></p>
                                {article.image && (
                                    <img
                                        src={`http://localhost:3000${article.image}`}
                                        alt={article.title}
                                        className={styles.articleImage} // Aggiunto stile
                                    />
                                )}
                                <p className={styles.content}><strong>Content:</strong> {article.content}</p>
                                <p><strong>Category:</strong> {article.tags}</p>
                                <Link to={`/posts/${article.id}`}>
                                    <button className={`${styles.btn} ${styles['btn-readMore']}`}>Read More</button>
                                </Link>
                            </div>
                            <button className={`${styles.btn} ${styles['btn-delete']}`} onClick={() => onRemoveArticle(article.id)}>Delete</button>
                        </li>

                    ))}
                </ul>
            </div >
        </>

    );
};

export default ArticleList;