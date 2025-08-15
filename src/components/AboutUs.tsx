import React from 'react';
import Image from 'next/image';
import aboutUsImg from "../images/aboutUs.webp";

interface ConsistentLayout {
  section: string;
  sectionClass: string;
  sectionSubheadingClass: string;
}

interface AboutUsProps {
  consistentLayout: ConsistentLayout;
  aboutUs: string;
}

interface Stat {
  stateNumber: string;
  statName: string;
}

const AboutUs: React.FC<AboutUsProps> = ({ consistentLayout, aboutUs }) => {
  const subheading = "Just because you're a small business doesn't mean your website can't impress.";
  const subheadingText = "At Bytesite Digital, we found many small businesses still lack an online presence, and website costs are often too high. We're here to close that gap by providing tailored, affordable website solutions, ensuring businesses get exactly what they need without overpaying.";

  const stats: Stat[] = [
    {
      stateNumber: "100%",
      statName: "Satisfaction",
    },
    {
      stateNumber: "15+",
      statName: "Projects",
    },
    {
      stateNumber: "100",
      statName: "Page Scores",
    },
    {
      stateNumber: "2+ Years",
      statName: "Experience",
    },
  ];

  return (
    <section 
      id="aboutUs" 
      className={consistentLayout.section}
      >
      <div className="grid grid-cols-2 max-md:flex max-md:flex-col gap-4 xl:px-[120px] lg:px-[64px]">
        
        {/* LEFT COLUMN */}
        <div className="p-6 bg-secondary flex flex-col justify-between rounded-2xl text-white max-md:space-y-8">
          <div className="space-y-4 xl:space-y-8">
            <p className={consistentLayout.sectionClass}>
              {aboutUs.toUpperCase()}
            </p>
            <h2 className="h3 font-bold">
              {subheading}
            </h2>
          </div>
          <p className="p">
            {subheadingText}
          </p>
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex flex-col gap-4">
          {/* Image */}
          <div>
            <Image
              src={aboutUsImg}
              alt="Team at Bytesite Digital collaborating on a project"
              className="rounded-2xl w-full lg:min-h-[480px] min-h-[320px]"
              width={600}
              height={480}
            />
          </div>

          {/* Stats */}
          <div
            className="grid grid-cols-2 xl:grid-cols-4 p-6 bg-secondary rounded-2xl gap-2"
            aria-label="Business Performance Statistics"
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="rounded-lg text-white border-2 p-4 border-gray-400"
              >
                <h3 className="h6 font-bold">
                  {stat.stateNumber}
                </h3>
                <p className="text-base font-bold">
                  {stat.statName}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
