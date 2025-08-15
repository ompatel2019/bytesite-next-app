import React from 'react';

const CTA = () => {
  return (
    <div className='responsivePad bg-primary py-16 space-y-8'>
        <div className='text-center space-y-4'>
            <h2 className='text-white h4 font-semibold'>
                Ready to get started?
            </h2>
            <div className='flex space-x-1 items-center p-2 bg-white h7 rounded-md text-primary hover:px-8 transition-all w-fit px-4 turnParent'>
                <span>Get Started</span>
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
            </div>
        </div>
    </div>
  );
};

export default CTA;
