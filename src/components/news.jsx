import React, { useState, useEffect } from 'react';
import axios from 'axios';

function News() {
  const [articles, setArticles] = useState([]);
  const [category, setCategory] = useState('technology'); // Default category
  const [query, setQuery] = useState(''); // Custom search query
  const [error, setError] = useState(null);

  const fetchNews = async () => {
    try {
      const apiKey = '5f9dce0cff844015bd9ebc1449e5e571'; // Replace with your API key
      const endpoint = query
        ? `https://newsapi.org/v2/everything?q=${query}&apiKey=${apiKey}`
        : `https://newsapi.org/v2/top-headlines?category=${category}&country=us&apiKey=${apiKey}`;

      const response = await axios.get(endpoint);
      setArticles(response.data.articles);
      setError(null);
    } catch (err) {
      setError('Failed to fetch news');
    }
  };

  useEffect(() => {
    fetchNews();
  }, [category, query]); // Refetch when category or query changes

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
    setQuery(''); // Clear custom query when changing categories
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchNews();
  };

  return (
    <div className="bg-green-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-6">
        Latest News
      </h2>

      {/* Category Selector */}
      <div className="flex flex-wrap gap-4 mb-6">
        {['technology', 'business', 'health', 'sports', 'science'].map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategoryChange(cat)}
            className={`px-4 py-2 rounded-lg font-medium ${
              category === cat
                ? 'bg-green-500 text-white'
                : 'bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200'
            }`}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      {/* Search Bar */}
      <form onSubmit={handleSearch} className="flex items-center mb-6">
        <input
          type="text"
          placeholder="Search for news..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 p-3 border rounded-l-lg dark:border-gray-600 dark:bg-gray-700 dark:text-white"
        />
        <button className="p-3 bg-green-500 text-white rounded-r-lg">
          Search
        </button>
      </form>

      {/* Error Message */}
      {error && <p className="text-red-500 dark:text-red-400 mb-4">{error}</p>}

      {/* News Articles */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <img
              src={article.urlToImage || 'https://via.placeholder.com/150'}
              alt={article.title}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
              {article.title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {article.source.name}
            </p>
            <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">
              {article.description?.slice(0, 100)}...
            </p>
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 dark:text-green-400 mt-4 inline-block hover:underline"
            >
              Read More →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default News;
