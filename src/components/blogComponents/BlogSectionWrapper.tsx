import React from 'react';

interface BlogSectionWrapperProps {
  children: React.ReactNode;
}

const BlogSectionWrapper: React.FC<BlogSectionWrapperProps> = ({ children }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {children}
    </div>
  );
};

export default BlogSectionWrapper;
