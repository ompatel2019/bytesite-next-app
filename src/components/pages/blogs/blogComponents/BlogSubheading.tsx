import React from 'react'

interface BlogSubheadingProps {
  blogSubheading: string;
}

const BlogSubheading: React.FC<BlogSubheadingProps> = ({blogSubheading}) => {
  return (
    <div className='h6 font-semibold border-l-4 pl-3'>{blogSubheading}</div>
  )
}

export default BlogSubheading
