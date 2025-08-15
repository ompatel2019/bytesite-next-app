import React from 'react';

interface BlogHeaderProps {
  title: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
}

const BlogHeader: React.FC<BlogHeaderProps> = ({ title, author, date, readTime, category }) => {
  return (
    <div className="mb-8">
      <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full mb-4">
        {category}
      </span>
      <h1 className="text-3xl font-bold text-gray-900 mb-4">{title}</h1>
      <div className="flex items-center text-gray-600 text-sm space-x-4">
        <span>By {author}</span>
        <span>•</span>
        <span>{date}</span>
        <span>•</span>
        <span>{readTime}</span>
      </div>
    </div>
  );
};

export default BlogHeader;
