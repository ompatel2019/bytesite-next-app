import React from 'react';
import { RxCross2 } from "react-icons/rx";
import { IoCheckmark } from "react-icons/io5";
import Link from 'next/link';

interface ConsistentLayout {
  section: string;
  sectionClass: string;
  sectionSubheadingClass: string;
}

interface PricingProps {
  pricing: string;
  consistentLayout: ConsistentLayout;
}

interface PricingPerk {
  offered: boolean;
  perkName: string;
}

interface PricingTab {
  pricingName: string;
  pricingStrikeThrough?: string;
  pricingPrice: string;
  pricingPerks: PricingPerk[];
}

/**
 * Pricing section
 */
const Pricing: React.FC<PricingProps> = ({ pricing, consistentLayout }) => {
  const subheading =
    "An average website for a small business can range from $5,000 to $10,000+ in Australia. Nobody should commit that much money without seeing results.";

  const pricingTabs: PricingTab[] = [
    {
      pricingName: "Lump Sum",
      pricingStrikeThrough: "$5000",
      pricingPrice: "$1899",
      pricingPerks: [
        { offered: true, perkName: "Custom Design & Development"},
        { offered: true, perkName: "$10/mo Hosting" },
        { offered: true, perkName: "Organic Content SEO" },
        { offered: true, perkName: "Google Business Profile Optimisation" },
        { offered: true, perkName: "Site Performance & Technical Optimization"},
        { offered: false, perkName: "Local Keyword Tracking & Analytics Reporting"},
        { offered: false, perkName: "Unlimited Edits" },
        { offered: false, perkName: "24/7 Support" },
        { offered: false, perkName: "Periodical SEO Updates" },
      ]
    },
    {
      pricingName: "Monthly",
      pricingPrice: "$249/mo",
      pricingPerks: [
        { offered: true, perkName: "Custom Design & Development"},
        { offered: true, perkName: "Includes Hosting" },
        { offered: true, perkName: "Organic Content SEO" },
        { offered: true, perkName: "Periodical Google Business Profile Optimisation" },
        { offered: true, perkName: "Site Performance & Technical Optimization"},
        { offered: true, perkName: "Local Keyword Tracking & Analytics Reporting"},
        { offered: true, perkName: "Unlimited Edits" },
        { offered: true, perkName: "24/7 Support" },
        { offered: true, perkName: "Periodical SEO Updates" },
      ]
    }
  ];

  return (
    <section
      id="pricing"
      className={consistentLayout.section}
    >
      <div className="fade-in fade-down text-white text-left">
        <p className={consistentLayout.sectionClass}>
          {pricing.toUpperCase()}
        </p>
        <h2 className="h4 font-semibold leading-8">
          {subheading}
        </h2>
      </div>

      <div className="grid grid-cols-2 max-md:grid-cols-1 gap-4 text-white xl:px-[96px] lg:px-[64px]">
        {pricingTabs.map((pricingTab, idx) => (
          <div
            key={idx}
            className={`
              border-2 border-white
              max-md:p-6
              p-8 pt-12
              rounded-lg
              transition-all duration-200
              hover:translate-y-5
              max-md:hover:translate-y-2
              bg-primary
              space-y-6 max-md:space-y-3
              flex 
              flex-col
              justify-around
              ${pricingTab.pricingName === 'Monthly' ? 'invert' : 'bg-primary'}
            `}
          >
            <div className="border-b-2 pb-4 space-y-2 max-md:space-y-1">
              <h2 className="font-dm-mono h4 font-bold">
                {pricingTab.pricingName}
              </h2>

              <div className="font-dm-mono h5 flex space-x-2">
                {pricingTab.pricingStrikeThrough && (
                  <h3 className="text-gray-300 line-through">
                    {pricingTab.pricingStrikeThrough}
                  </h3>
                )}
                <h3>{pricingTab.pricingPrice}</h3>
              </div>
            </div>
            
            <p className="p">Includes:</p>

            <div className="space-y-4 max-md:space-y-2">
              {pricingTab.pricingPerks.map((perk, perkIdx) => (
                <div key={perkIdx} className="flex space-x-2 items-center">
                  {perk.offered ? (
                    <IoCheckmark className="w-6 h-6" aria-hidden="true" />
                  ) : (
                    <RxCross2 className="w-6 h-6" aria-hidden="true" />
                  )}
                  <p className="p">{perk.perkName}</p>
                </div>
              ))}
            </div>
            
            <div>
              <Link href="#contact">
                <div className="text-center p bg-white rounded-md p-3 max-md:p-2 text-secondary font-dm-mono">
                  Get Started
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
