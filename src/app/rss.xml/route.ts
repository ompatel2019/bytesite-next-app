import { NextResponse } from 'next/server';

export async function GET() {
  const rss = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
  <title>Bytesite Digital - AI Marketing & Software Studio Sydney</title>
  <description>Sydney's premier AI Marketing & Software Studio. We create cutting-edge digital solutions and AI-powered marketing campaigns.</description>
  <link>https://bytesitedigital.com.au</link>
  <language>en-AU</language>
  <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
  <atom:link href="https://bytesitedigital.com.au/rss.xml" rel="self" type="application/rss+xml" />
  
  <item>
    <title>AI Marketing & Software Services Sydney</title>
    <description>Discover our comprehensive AI marketing, custom software development, and digital solutions for Sydney businesses.</description>
    <link>https://bytesitedigital.com.au/services</link>
    <guid>https://bytesitedigital.com.au/services</guid>
    <pubDate>${new Date().toUTCString()}</pubDate>
  </item>
  
  <item>
    <title>Portfolio - AI Marketing & Software Projects Sydney</title>
    <description>Explore our portfolio of AI-powered marketing campaigns, custom software solutions, and digital transformations.</description>
    <link>https://bytesitedigital.com.au/portfolio</link>
    <guid>https://bytesitedigital.com.au/portfolio</guid>
    <pubDate>${new Date().toUTCString()}</pubDate>
  </item>
  
  <item>
    <title>Pricing - AI Marketing & Software Development Sydney</title>
    <description>Transparent pricing for AI marketing campaigns, custom software development, and digital solutions.</description>
    <link>https://bytesitedigital.com.au/pricing</link>
    <guid>https://bytesitedigital.com.au/pricing</guid>
    <pubDate>${new Date().toUTCString()}</pubDate>
  </item>
</channel>
</rss>`;

  return new NextResponse(rss, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
