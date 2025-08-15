import React from 'react';

interface BlogTextProps {
  children: React.ReactNode;
}

const BlogText: React.FC<BlogTextProps> = ({ children }) => {
  return (
    <p className="text-gray-700 leading-relaxed mb-6">
      {children}
    </p>
  );
};

export default BlogText;
