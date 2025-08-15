import React from 'react'

interface BlogSectionSubheadingProps {
  blogSectionSubheading: string;
}

const BlogSectionSubheading: React.FC<BlogSectionSubheadingProps> = ({blogSectionSubheading}) => {
  return (
    <h5 className='h6 font-bold'>
        {blogSectionSubheading}
    </h5>
  )
}

export default BlogSectionSubheading
