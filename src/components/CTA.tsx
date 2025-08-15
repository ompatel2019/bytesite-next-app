import React from 'react'
import Link from 'next/link';
import { GoArrowUpRight } from "react-icons/go";

const CTA: React.FC = () => {
  return (
    <>
        <div className='responsivePad bg-c1-0 py-16 space-y-8'>

            <h2 className='text-c4-0 font-dm-sans h4 font-semibold'>
                Seen enough? Get in touch now to claim a <span className="italic">free</span> website blueprint for your business! 
            </h2>

            <div className='flex space-x-1 items-center p-2 bg-c4-0 font-dm-sans h7 rounded-md text-c1-0 hover:px-8 transition-all w-fit px-4 turnParent'>
                <Link href='/contact' className=''>
                    Get Started
                </Link>

                <GoArrowUpRight className='turn transition-all'/>
            </div>

        </div>
    </>
  )
}

export default CTA
