import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function News() {
  const [articles, setArticles] = useState([]);
  const [category, setCategory] = useState('technology'); // Default category
  const [query, setQuery] = useState(''); // Custom search query
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // NewsAPI base URL
  const proxyUrl = 'https://cors-anywhere.herokuapp.com/'; // Optional proxy for CORS issues
  const baseUrl = 'https://newsapi.org/v2';
  const apiKey = '5f9dce0cff844015bd9ebc1449e5e571'; // Replace with your actual API key

  // Fetch news articles
  const fetchNews = async () => {
    setLoading(true);
    setError(null);
    try {
      const endpoint = query
        ? `${baseUrl}/everything?q=${query}&apiKey=${apiKey}`
        : `${baseUrl}/top-headlines?category=${category}&country=us&apiKey=${apiKey}`;

      const response = await axios.get(endpoint, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      setArticles(response.data.articles);
    } catch (err) {
      console.error(err);
      setError('Failed to fetch news. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  // Refetch news when category or query changes
  useEffect(() => {
    fetchNews();
  }, [category, query]);

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
    setQuery(''); // Clear custom query when changing categories
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchNews();
  };

  return (
    <div className="bg-green-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg min-h-screen">
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
        <button
          type="submit"
          className="p-3 bg-green-500 text-white rounded-r-lg"
        >
          Search
        </button>
      </form>

      {/* Error Message */}
      {error && <p className="text-red-500 dark:text-red-400 mb-4">{error}</p>}

      {/* Loading State */}
      {loading && (
        <p className="text-gray-500 dark:text-gray-400 text-center">Loading...</p>
      )}

      {/* News Articles */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {!loading &&
          articles.map((article, index) => (
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
              <Link
                to={`/news/${encodeURIComponent(article.title)}`}
                state={{ article }}
                className="text-blue-600 dark:text-blue-400 mt-4 inline-block"
              >
                Read More
              </Link>
            </div>
          ))}
      </div>

      {/* No Articles */}
      {!loading && articles.length === 0 && (
        <p className="text-gray-500 dark:text-gray-400 text-center">
          No articles found.
        </p>
      )}
    </div>
  );
}

export default News;
