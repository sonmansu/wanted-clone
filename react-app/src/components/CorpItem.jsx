import React from 'react';
import '../styles/corpItem.css';

const CorpItem = ({ name, cnt, logoImg, thumbnail }) => {
  return (
    <li className="hiring-corp-item">
      <a href="#">
        <div className="hiring-corp-item-bg-img-wrap">
          <div
            className="hiring-corp-item__bg-img"
            style={{ backgroundImage: `url(${thumbnail})` }}
          ></div>
        </div>
        <div
          className="hiring-corp-item__logo-img"
          style={{ backgroundImage: `url(${logoImg})` }}
        ></div>
        <div className="hiring-corp-item__text-box">
          <h4 className="hiring-corp-item__title">{name}</h4>
          <p className="hiring-corp-item__subtitle">{cnt}개 포지션</p>
        </div>
      </a>
    </li>
  );
};

export default CorpItem;
