import React, { createContext, useState, useContext, useEffect } from "react";
import { fetchArticles } from "../api/ArticleOperations";
import axios from "axios";

//Contesto per post
const PostContext = createContext();

//Provider per dati applicazione
export const PostProvider = ({ children }) => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchArticles(setPosts, setError, setLoading);
    }, []);

    return (
        <PostContext.Provider value={{ posts, loading, error }}>
            {children}
        </PostContext.Provider>
    );

}

export const usePostContext = () => useContext(PostContext);