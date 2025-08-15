import React from 'react'

interface BlogTextProps {
  blogText: string;
}

const BlogText: React.FC<BlogTextProps> = ({blogText}) => {
  return (
    <p>
        {blogText}
    </p>
  )
}

export default BlogText
