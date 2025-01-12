import { useEffect } from 'react';

const useFetchArticlesEffect = (fetchArticles) => {
    useEffect(() => {
        fetchArticles(); // Richiama fetchArticles quando il componente viene montato
    }, []); // Aggiungi fetchArticles come dipendenza
};

export default useFetchArticlesEffect;