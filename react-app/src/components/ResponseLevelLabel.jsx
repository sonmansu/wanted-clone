import React from 'react';
import 'styles/responseLevelLabel.css';

export default function ResponseLevelLabel({ text }) {
  return (
    <span
      className={
        text === '매우 높음'
          ? 'response-text response-text--very-high'
          : text === '높음'
          ? 'response-text response-text--high'
          : 'response-text'
      }
    >
      응답률 {text}
    </span>
  );
}
