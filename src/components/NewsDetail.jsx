import React from 'react';
import { useLocation } from 'react-router-dom';

function NewsDetail() {
  const location = useLocation();
  const { article } = location.state || {}; // Ensure article data is passed

  if (!article) {
    return <p className="text-center">No article data available.</p>;
  }

  return (
    <div className="bg-green-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg min-h-screen">
      <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-6">
        {article.title || 'Untitled Article'}
      </h2>

      {/* Article Image */}
      <img
        src={article.image || 'https://via.placeholder.com/600x400'}
        alt={article.title || 'Article Image'}
        className="w-full h-auto object-cover rounded-lg mb-6"
      />

      {/* Article Source */}
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
        Source: {article.source?.name || 'Unknown Source'}
      </p>

      {/* Article Description */}
      <p className="text-lg text-gray-700 dark:text-gray-300">
        {article.content || 'No content available for this article.'}
      </p>

      {/* Article Link */}
      <a
        href={article.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 dark:text-blue-400 mt-4 inline-block"
      >
        Read Full Article
      </a>
    </div>
  );
}

export default NewsDetail;
