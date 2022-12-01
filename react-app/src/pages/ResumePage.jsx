import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/resumePage.scss';
import { ReactComponent as MoreIcon } from '../components/Header/moreIcon.svg';

export default function ResumePage() {
  const onFileUpload = (e) => {
    console.log(e.target.files);
  };
  return (
    <div className="resume-page">
      <div className="page-wrap">
        <div className="header">
          <span className="title-text">최근 문서</span>
          <Link className="link-text">원티드 이력서 소개</Link>
        </div>
        <div className="body">
          <div className="item item--btn">
            <div className="icon-wrap">
              <i className="icon-new_resume"></i>
            </div>
            <p className="title">새 이력서 작성</p>
          </div>
          <div className="item item--btn">
            <div className="icon-wrap icon-wrap--bg-grey">
              <i className="icon-upload_resume"></i>
            </div>
            <input
              type="file"
              id="fileUpload"
              onChange={(e) => onFileUpload(e)}
            />
            <p className="title">파일 업로드</p>
          </div>
          <div className="item">파일 3</div>
          <div className="item">
            <p className="file-name">파일4</p>
            <p className="upload-date">2022.12.01</p>
            <div className="file-icon">한</div>
            <p className="upload-state">작성 중</p>
            <button className="more-btn"></button>
          </div>
          <div className="item">Written test.txt</div>
          <div className="item">Written test.txt</div>
          <div className="item">Written test.txt</div>
        </div>
      </div>
    </div>
  );
}
