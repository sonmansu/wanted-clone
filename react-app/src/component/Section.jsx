import React from 'react';
import SectionHeader from './SectionHeader';
import '../styles/section.css';

const Section = (props) => {
  const { title, subtitle, children } = props;
  return (
    <section>
      <div className="section-wrap">
        <SectionHeader title={title} subtitle={subtitle} />
        {children}
      </div>
    </section>
  );
};

export default Section;
