import React from 'react';

interface PageTitleProps {
  pageTitle: string;
  pageRoute: string;
  dividerBackground?: string;
  dividerFill?: string;
  backgroundColour?: string;
  textColour?: string;
}

const PageTitle: React.FC<PageTitleProps> = ({ pageTitle, pageRoute, dividerBackground, dividerFill, backgroundColour, textColour }) => {
  return (
    <>
      <section className={`bg-primary text-white space-y-12 max-md:space-y-4`}>
        <div className='space-y-4 responsivePad py-48 text-center'>
          <h1 className='h1 font-black'>
            {pageTitle}
          </h1>
          <p className='h7 font-medium'>
            {pageRoute}
          </p>
        </div>
      </section>
    </>
  );
};

export default PageTitle;
