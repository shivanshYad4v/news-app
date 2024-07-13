import React, { useEffect, useState } from "react";
import NewsItems from "./NewsItems";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [loading, setLoading] = useState(true);

  const capitalizeFirstLetter = (str) => {
    return str[0].toUpperCase() + str.slice(1);
  };

  useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.category)} - The News Board`;
    fetchNews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const fetchNews = async () => {
    const { country, category, pagesize } = props;
    setLoading(true);
    let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=1eb8d7c15bc44aa7a6940cc512bb5c39&page=${page}&pageSize=${pagesize}`;
    try {
      let data = await fetch(url);
      if (!data.ok) {
        throw new Error('Failed to fetch data');
      }
      let parse = await data.json();
      setArticles(parse.articles);
      setTotalResults(parse.totalResults);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handlePrevClick = () => {
    setPage(page - 1);
  };

  const handleNextClick = () => {
    setPage(page + 1);
  };

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        <div className="mt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-y-10 mx-4 lg:mx-48">
            {articles.length > 0 ? (
              articles
                .filter(
                  (element) =>
                    element.title &&
                    element.description &&
                    element.urlToImage
                )
                .map((element) => (
                  <NewsItems
                    key={element.url}
                    Title={element.title.slice(0, 45)}
                    deesp={element.description.slice(0, 88)}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author || "Unknown"} // Display "Unknown" if author is not provided
                    date={element.publishedAt.slice(0, 10)}
                  />
                ))
            ) : (
              <p>No articles found.</p>
            )}
          </div>

          <div className="flex justify-between mx-4 md:mx-8 lg:mx-32 mt-8">
            <button
              type="button"
              disabled={page <= 1}
              className={`text-white font-medium rounded-xl text-lg px-5 py-2.5 text-center mb-2 ${page <= 1
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-blue-700 hover:bg-blue-800"
                }`}
              onClick={handlePrevClick}
            >
              &larr; Previous
            </button>
            <button
              type="button"
              disabled={
                page + 1 > Math.ceil(totalResults / props.pagesize)
              }
              className={`text-white font-medium rounded-xl text-lg px-5 py-2.5 text-center mb-2 ${page + 1 > Math.ceil(totalResults / props.pagesize)
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-blue-700 hover:bg-blue-800"
                }`}
              onClick={handleNextClick}
            >
              Next &rarr;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

News.defaultProps = {
  country: "in",
  pagesize: 8,
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  pagesize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
