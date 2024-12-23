import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const NewsDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { article } = location.state || {};

  if (!article) {
    // Redirect to the home page if no article data is available
    navigate('/');
    return null;
  }

  return (
    <div className="p-6 bg-gray-100 dark:bg-gray-900 min-h-screen">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 px-4 py-2 bg-blue-600 text-white rounded-lg"
      >
        Back
      </button>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
        {article.urlToImage && (
          <img
          src={article.image || 'https://via.placeholder.com/150'}
          alt={article.title}
          className="w-full h-40 object-cover rounded-lg mb-4"
          loading="lazy"
        />
        )}
        <h1 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">
          {article.title}
        </h1>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
          {article.source.name} - {new Date(article.publishedAt).toLocaleDateString()}
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
          {article.content || 'Full content not available.'}
        </p>
        <a
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 dark:text-blue-400"
        >
          Read the full article on the source website
        </a>
      </div>
    </div>
  );
};

export default NewsDetail;
