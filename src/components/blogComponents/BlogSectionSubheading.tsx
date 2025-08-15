import React from 'react';

interface BlogSectionSubheadingProps {
  children: React.ReactNode;
}

const BlogSectionSubheading: React.FC<BlogSectionSubheadingProps> = ({ children }) => {
  return (
    <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
      {children}
    </h2>
  );
};

export default BlogSectionSubheading;
