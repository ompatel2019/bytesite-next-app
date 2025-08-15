import React from 'react';
import Image from 'next/image';
import blogImage from '../../../images/blog3.webp';

interface ConsistentLayout {
  section: string;
  sectionClass: string;
  sectionSubheadingClass: string;
}

interface Blog3Props {
  consistentLayout: ConsistentLayout;
}

const Blog3: React.FC<Blog3Props> = ({ consistentLayout }) => {
  const blogTitle = 'How to Measure the ROI of Your SEO Efforts';
  const blogDescription = `
    Learn effective strategies to quantify and enhance your SEO investments. 
    Discover key metrics and tools to track your SEO performance and ROI.
  `;

  return (
    <section 
      id='blog3'
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
            Measuring SEO ROI is crucial for demonstrating the value of your digital marketing efforts. 
            While SEO can be complex to track, understanding key metrics and implementing 
            proper measurement strategies can help you optimize your campaigns and justify investments.
          </p>
        </div>

        <div className='space-y-4'>
          <h2 className='h3 font-bold'>1. Key SEO Metrics to Track</h2>
          <p>
            Focus on metrics that directly impact your business goals: organic traffic growth, 
            keyword rankings, conversion rates from organic search, and revenue attribution. 
            Tools like Google Analytics, Search Console, and third-party SEO platforms 
            provide comprehensive data for analysis.
          </p>
        </div>

        <div className='space-y-4'>
          <h2 className='h3 font-bold'>2. Setting Up Conversion Tracking</h2>
          <p>
            Implement proper conversion tracking to attribute revenue to specific SEO efforts. 
            Use UTM parameters, goal tracking in analytics, and e-commerce tracking to 
            measure how organic search contributes to your bottom line.
          </p>
        </div>

        <div className='space-y-4'>
          <h2 className='h3 font-bold'>Conclusion</h2>
          <p>
            Measuring SEO ROI requires a combination of technical setup, consistent monitoring, 
            and regular analysis. By focusing on the right metrics and implementing 
            proper tracking, you can demonstrate the value of your SEO investments 
            and optimize for better results.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Blog3;
