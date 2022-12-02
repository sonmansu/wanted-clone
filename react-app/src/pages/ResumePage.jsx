import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/resumePage.scss';
// import { storage } from './api/firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '../utils/firebaseConfig';
import { ReactComponent as MoreIcon } from '../components/Header/moreIcon.svg';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';

export default function ResumePage() {
  const [resumes, setResumes] = useState([]);

  let email = useRef(null);
  useEffect(() => {
    email.current = localStorage.getItem('email'); // 로그인이 돼있어야함

    if (!email) return;
  }, [email]);
  function onFileUpload(e) {
    console.log(e.target.files);
    const selectedFile = e.target.files[0];

    uploadFirebase(selectedFile);
  }

  const uploadFirebase = (file) => {
    const fileName = file.name;
    const uploadDate = dateToString(file.lastModifiedDate);
    // const fileRef = ref(storage, email.current + '/' + fileName);
    const fileRef = ref(storage, 'images/' + fileName);

    // 'file' comes from the Blob or File API
    uploadBytes(fileRef, file).then((snapshot) => {
      console.log('Uploaded a blob or file!');
      new Promise((resolve, reject) => {
        getFirebaseDownloadURL(fileRef, resolve);
      }).then((url) => {
        setResumes([
          ...resumes,
          { fileName: fileName, uploadDate: uploadDate, url: url },
        ]);
        console.log('resumes :>> ', resumes);
      });
    });
  };

  function dateToString(date) {
    const year = date.getFullYear();
    console.log('typeof year', typeof year);
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');

    return [year, month, day].join('.');
  }
  function getFirebaseDownloadURL(fileRef, resolve) {
    getDownloadURL(fileRef)
      .then((url) => {
        // `url` is the download URL for 'images/stars.jpg'
        console.log('url', url);
        resolve(url);
        // This can be downloaded directly:
        // const xhr = new XMLHttpRequest();
        // xhr.responseType = 'blob';
        // xhr.onload = (event) => {
        //   const blob = xhr.response;
        // };
        // xhr.open('GET', url);
        // xhr.send();

        // Or inserted into an <img> element
        // const img = document.getElementById('myimg');
        // img.setAttribute('src', url);
      })
      .catch((error) => {
        // Handle any errors
      });
  }
  return (
    <div className="resume-page">
      <div className="page-wrap">
        <div className="header">
          <span className="title-text">최근 문서</span>
          <Link className="link-text">원티드 이력서 소개</Link>
        </div>
        <div className="body">
          <div className="item">
            <div className="btn-item">
              <div className="icon-wrap">
                <i className="icon-new_resume"></i>
              </div>
              <p className="title">새 이력서 작성</p>
            </div>
          </div>
          <div className="item">
            <label className="btn-item">
              <div className="icon-wrap icon-wrap--bg-grey">
                <i className="icon-upload_resume"></i>
              </div>
              <input type="file" onChange={(e) => onFileUpload(e)} />
              <p className="title">파일 업로드</p>
            </label>
          </div>
          {resumes.map((resume, idx) => (
            <ResumeItem
              key={idx}
              url={resume.url}
              fileName={resume.fileName}
              uploadDate={resume.uploadDate}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function ResumeItem({ url, fileName, uploadDate }) {
  return (
    <div className="item">
      <a
        className="resume-item"
        href={url}
        target="_blank"
        rel="noreferrer"
        download={url}
      >
        <div className="item-body">
          <div className="file-name">{fileName}</div>
          <p className="upload-date">{uploadDate}</p>
        </div>
        <div className="bottom-row">
          <div className="file-icon">한</div>
          <p className="upload-state">작성 중</p>
          <i className="icon-more_vert"></i>
        </div>
        <button className="more-btn"></button>
      </a>
    </div>
  );
}
