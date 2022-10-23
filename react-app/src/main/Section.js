import React from 'react';
import SectionHeader from './SectionHeader';
import SectionBody from './SectionBody';

const Section = (props) => {
    const { title, subtitle, contents } = props;
    return (
        <div class="section-wrap">
            <SectionHeader title={title} subtitle={subtitle} />
            <SectionBody contents={contents} />
        </div>
    );
};

export default Section;