import React from 'react';
import SectionHeader from '../component/SectionHeader';
import SectionBody from './SectionBody';

const Section = (props) => {
    const { title, subtitle, contents } = props;
    return (
        <div class="section-wrap">
            <SectionHeader title={title} subtitle={subtitle} />
        </div>
    );
};

export default Section;