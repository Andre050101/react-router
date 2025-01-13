import React, { useState } from 'react'
import Form from './components/Form';
import ChiSiamo from './pages/ChiSiamo';
import HomePage from './pages/HomePage';
import Layout from './pages/Layout';
import PostDetail from './pages/PostDetail';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { fetchArticles, addArticle, removeArticle } from './api/ArticleOperations';
import useFetchArticlesEffect from './hooks/UseFetchArticles';

function App() {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useFetchArticlesEffect(() => fetchArticles(setArticles, setError, setLoading));

  const handleRemoveArticle = async (id) => {
    await removeArticle(id, setArticles);
  };

  const handleAddArticle = async (article) => {
    await addArticle(article, articles, setArticles);
  };

  // Render in caso di errore
  if (error) {
    return <p style={{ color: 'red' }}>{error}</p>;
  }

  // Render in caso di caricamento
  if (loading) {
    return <p>Caricamento degli articoli...</p>;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage articles={articles} onRemoveArticle={handleRemoveArticle} />} />
          <Route
            path="new"
            element={<Form articles={articles} setArticles={setArticles} onAddArticle={handleAddArticle} />}
          />
          <Route path="about" element={<ChiSiamo />} />
          <Route path="posts/:id" element={<PostDetail />} />
        </Route>
      </Routes>
    </BrowserRouter >
  );
}

export default App;
