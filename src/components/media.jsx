import React from 'react';
import "./css/media.css";

const Media = () => {
  return (
    <div>
      <h2>교과서</h2>
      <div className='article'>
        <p>기업 실적 분석에 쓰이는 재무제표에 대해 알아볼까요?</p>
        <div className='img1'><img src="/image/교과서1.png" /></div>
      </div>

      <div className='article'>
        <p>주요 지수, 코스피 코스닥이란?</p>
        <div className='img2'><img src="/image/교과서2.png" /></div>

      </div>

      <div className='article'>
        <p>주식 기본 용어, 알고 시작하자!</p>
        <div className='img3'><img src="/image/교과서3.png" /></div>
      </div>

    </div>
  );
};

export default Media;
