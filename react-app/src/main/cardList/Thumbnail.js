import React from 'react';
import './Thumbnail.css'


const Thumbnail = (props) => {
    return (
        <div className="section-contents__thumb">
            <img src={props.thumbnail} alt="콘텐츠 썸네일" />
        </div>
    );
};

export default Thumbnail;