import React from 'react'

interface BlogSectionWrapperProps {
  children: React.ReactNode;
  sectionClass?: string;
}

const BlogSectionWrapper: React.FC<BlogSectionWrapperProps> = ({children, sectionClass}) => {
  return (
    <div className='space-y-4'>
      {children}
    </div>
  )
}

export default BlogSectionWrapper
