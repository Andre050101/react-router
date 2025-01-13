import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styles from "./PostDetail.module.css"

const PostDetail = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:3000/posts/${id}`)
            .then((response) => {
                setPost(response.data);
            })
            .catch((err) => {
                console.error("Errore durante il recupero del post:", err);
                setError("Errore durante il recupero del post.");
            });
    }, [id]);

    if (error) {
        return <div>{error}</div>;
    }

    if (!post) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{post.title}</h1>
            <p><strong>Autore:</strong> {post.author}</p>
            <p><strong>Contenuto:</strong> {post.content}</p>
            <p><strong>Image:</strong></p>
            {post.image && (
                <div>
                    <img
                        src={post.image.startsWith("http") ? post.image : `http://localhost:3000${post.image}`}
                        alt={post.title}
                    />
                </div>
            )}
            <p><strong>Categoria:</strong> {post.category}</p>
        </div>
    );
}

export default PostDetail;
