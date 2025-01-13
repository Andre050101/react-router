import axios from "axios";

//Article utilities:


/*************  ✨ Codeium Command ⭐  *************/
/*
 * Fetches articles from the server and updates the application state.
 * On a successful response, the articles data is logged and the state is updated.
 * If an error occurs during the fetch operation, an error message is set.
 * Finally, the loading state is turned off.
 */
function fetchArticles(setArticles, setError, setLoading) {
    axios
        .get('http://localhost:3000/posts')
        .then((response) => {
            console.log(response.data);
            setArticles(response.data);
        })
        .catch((err) => {
            setError('Errore durante il recupero degli articoli.');
        })
        .finally(() => {
            setLoading(false);
        });
};

/*************  ✨ Codeium Command ⭐  *************/
/**
 * Aggiunge un nuovo articolo al database del server.
 * @param {object} article - Dati dell'articolo da aggiungere
 * @returns {Promise<void>}
 */
async function addArticle(article, articles, setArticles) {
    try {
        const response = await axios.post("http://localhost:3000/posts", article);
        setArticles([...articles, response.data]); // Aggiungi il nuovo articolo
    } catch (error) {
        console.error("Errore durante l'aggiunta dell'articolo:", error);
        alert("Errore durante l'aggiunta dell'articolo.");
    }
}


/*************  ✨ Codeium Command ⭐  *************/
/**
 * Elimina un articolo con l'id specificato dal database del server.
 * @param {number} id - Id dell'articolo da eliminare
 * @returns {Promise<void>}
 */
async function removeArticle(id, setArticles) {
    try {
        await axios.delete(`http://localhost:3000/posts/${id}`);
        setArticles((prevArticles) => prevArticles.filter((article) => article.id !== id));
    } catch (err) {
        console.error('Errore durante l\'eliminazione dell\'articolo:', err);
    }
};

export { fetchArticles, addArticle, removeArticle };