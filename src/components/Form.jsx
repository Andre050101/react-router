import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import styles from "./Form.module.css"

const InputField = ({ label, type, name, value, onChange, placeholder, options }) => {
    if (type === "select") {
        return (
            <div>
                <label>{label}:</label>
                <select
                    name={name}
                    value={value}
                    onChange={onChange}
                >
                    <option value="" disabled>Choose an option</option>
                    {options.map(option => (
                        <option key={option} value={option}>{option}</option>
                    ))}
                </select>
            </div>
        );
    }

    return (
        <div>
            <label>{label}:</label>
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </div>
    );
};

const Form = ({ onAddArticle }) => {
    const [formState, setFormState] = useState({
        titolo: "",
        author: "",
        status: "",
        image: "",
        contenuto: "",
        category: ""
    });

    const navigate = useNavigate();


    const resetForm = () => {
        setFormState({
            titolo: "",
            author: "",
            status: "",
            image: "",
            contenuto: "",
            category: "",
            tags: []
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formState.titolo.trim()) {
            return alert("Title is required");
        }

        try {
            const newArticle = {
                titolo: formState.titolo,
                contenuto: formState.contenuto,
                author: formState.author,
                category: formState.category,
                status: formState.status,
                image: formState.image, // URL dell'immagine
            };

            // Usa la funzione onAddArticle
            await onAddArticle(newArticle);

            resetForm();
            navigate("/");
        } catch (error) {
            console.error("Errore durante l'aggiunta del post:", error);
            alert("Errore durante l'aggiunta del post");
        }
    };
    return (
        <>
            <h1>Add New Article</h1>
            <form onSubmit={handleSubmit}>
                <InputField
                    label="Title"
                    type="text"
                    name="titolo"
                    value={formState.titolo}
                    onChange={e => setFormState({ ...formState, titolo: e.target.value })}
                    placeholder="Enter article title"
                />
                <InputField
                    label="Author"
                    type="text"
                    name="author"
                    value={formState.author}
                    onChange={e => setFormState({ ...formState, author: e.target.value })}
                    placeholder="Enter article author"
                />
                <InputField
                    label="Status"
                    type="select"
                    name="status"
                    value={formState.status}
                    onChange={e => setFormState({ ...formState, status: e.target.value })}
                    options={["draft", "published"]}
                />
                <InputField
                    label="Image URL"
                    type="text"
                    name="image"
                    value={formState.image || ""}
                    onChange={e => setFormState({ ...formState, image: e.target.value })}
                    placeholder="Enter image URL"
                />
                <InputField
                    label="Content"
                    type="textarea"
                    name="contenuto"
                    value={formState.contenuto}
                    onChange={e => setFormState({ ...formState, contenuto: e.target.value })}
                    placeholder="Enter article content"
                />
                <InputField
                    label="Category"
                    type="select"
                    name="category"
                    value={formState.category}
                    onChange={e => setFormState({ ...formState, category: e.target.value })}
                    options={["technology", "health", "cooking", "travel", "sport", "music", "art", "formation", "lifestyle", "finance"]}
                />
                <button type="submit">Add Article</button>
            </form>
        </>
    );
};

export default Form;