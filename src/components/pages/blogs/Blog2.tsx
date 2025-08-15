import React from 'react';
import Image from 'next/image';
import blogImage from '../../../images/blog2.webp';

interface ConsistentLayout {
  section: string;
  sectionClass: string;
  sectionSubheadingClass: string;
}

interface Blog2Props {
  consistentLayout: ConsistentLayout;
}

const Blog2: React.FC<Blog2Props> = ({ consistentLayout }) => {
  const blogTitle = 'The Impact of Web Design on User Experience and Conversions';
  const blogDescription = `
    A well-crafted layout can reduce bounce rates and boost conversions, while 
    poorly structured sites drive visitors away. Learn how design affects 
    both brand perception and sales growth.
  `;

  return (
    <section 
      id='blog2'
      className={consistentLayout.section}
      aria-label={blogTitle}
    >
      {/* Head for meta tags */}
      

      {/* Blog Title */}
      <h1 className='h1 text-center'>{blogTitle}</h1>

      {/* Blog Image */}
      <Image
        src={blogImage}
        alt={blogTitle}
        className="rounded-md my-4 w-full"
        width={800}
        height={400}
      />

      <div className='responsivePad space-y-8'>
        <div className='space-y-4'>
          <h2 className='h3 font-bold'>Introduction</h2>
          <p>
            Web design influences everything from brand perception to user engagement. 
            A well-crafted layout can reduce bounce rates and boost conversions, while 
            poorly structured sites drive visitors away. In this article, we examine 
            how layout, aesthetics, and overall user experience tie into conversion success.
          </p>
        </div>

        <div className='space-y-4'>
          <h2 className='h3 font-bold'>1. First Impressions and Brand Perception</h2>
          <p>
            Users form opinions within seconds of arriving. Colors, fonts, and layout 
            cues establish trust (or distrust). Cohesive branding signals professionalism. 
            Clashing design elements or slow-loading banners can raise doubts about 
            product or service quality.
          </p>
        </div>

        <div className='space-y-4'>
          <h2 className='h3 font-bold'>2. Usability and Navigation</h2>
          <p>
            Menus should use concise labels that map to your site's structure. For large sites, 
            mega menus or well-organized categories make deeper content accessible. 
            Use breadcrumbs to show users where they are in the hierarchy.
          </p>
        </div>

        <div className='space-y-4'>
          <h2 className='h3 font-bold'>Conclusion</h2>
          <p>
            Web design is not just about aesthetics—it's about creating experiences 
            that guide users toward conversion while building trust and credibility. 
            Every design decision should serve both user needs and business goals.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Blog2;
