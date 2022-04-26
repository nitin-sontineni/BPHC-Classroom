import React from 'react'
import ReactPlayer from 'react-player/youtube';
import MenuAppBar from '../../header';
import './profLecture.css';
import ProfLecturePageTabs from "./profLecturepage_tabs.js";

export default function ProfLecture() {
    return (
    <div>
      <MenuAppBar />
      <div className="float-container">
      <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
      <ProfLecturePageTabs />
      </div>
    </div>
  );
}