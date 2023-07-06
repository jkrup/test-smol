import React from 'react';
import Animation from './Animation';
import ResponsiveDesign from './ResponsiveDesign';

interface SectionProps {
  title: string;
  content: string;
}

const Section: React.FC<SectionProps> = ({ title, content }) => {
  return (
    <div id="section" className="responsiveDesign">
      <h2>{title}</h2>
      <Animation>
        <p>{content}</p>
      </Animation>
    </div>
  );
};

export default Section;