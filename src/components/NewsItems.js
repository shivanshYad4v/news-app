import React from "react";
import PropTypes from "prop-types";

const NewsItems = (props) => {
  const { Title, deesp, imageUrl, newsUrl, date, author } = props;
  return (
    <div className="max-w-xs bg-[#0d3b66] border border-gray-200 rounded-lg shadow">
      <a href={newsUrl} target="_blank" rel="noopener noreferrer">
        <img className="rounded-t-lg object-cover w-full h-36" src={imageUrl} alt={Title} />
      </a>
      <div className="p-4">
        <a href={newsUrl} target="_blank" rel="noopener noreferrer">
          <h5 className="mb-1 text-xl font-bold tracking-tight text-[#faf0ca]">
            {Title}...
          </h5>
        </a>
        <p className="mb-2 font-normal text-[#faf0ca]">
          {deesp}...
        </p>
        <a
          href={newsUrl} target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more &rarr;
        </a>
        <p className="text-[#faf0ca] mt-2 font-semibold">
          By {author || "Unknown"} on {new Date(date).toDateString()}
        </p>
      </div>
    </div>
  );
};

NewsItems.propTypes = {
  Title: PropTypes.string.isRequired,
  deesp: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  newsUrl: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  author: PropTypes.string
};

export default NewsItems;
