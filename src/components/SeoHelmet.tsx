import React from 'react';
import { Metadata } from 'next';

interface SeoHelmetProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  jsonSchema?: any;
}

// This component is now just for generating metadata objects
// It should be used in page.tsx files to export metadata
export const generateMetadata = ({ title, description, canonicalUrl, jsonSchema }: SeoHelmetProps): Metadata => {
  const metadata: Metadata = {
    title,
    description,
    ...(canonicalUrl && { alternates: { canonical: canonicalUrl } }),
    ...(jsonSchema && { other: { 'json-ld': JSON.stringify(jsonSchema) } }),
  };
  
  return metadata;
};

// Keep the component for backward compatibility but it no longer renders Head
const SeoHelmet: React.FC<SeoHelmetProps> = ({ title, description, canonicalUrl, jsonSchema }) => {
  // In the app directory, this component doesn't render anything
  // Metadata is handled by the page.tsx files
  return null;
};

export default SeoHelmet;
