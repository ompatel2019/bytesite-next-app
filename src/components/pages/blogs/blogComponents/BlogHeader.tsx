import React from 'react'

interface BlogHeaderProps {
  blogHeader: string;
}

const BlogHeader: React.FC<BlogHeaderProps> = ({blogHeader}) => {
  return (
    <div className='h3 font-bold'>{blogHeader}</div>
  )
}

export default BlogHeader
