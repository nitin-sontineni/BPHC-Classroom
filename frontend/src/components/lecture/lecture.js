// // import React, { useState, useCallback, useRef } from "react";
// // import { Button, View, Alert } from "react-native";
// // import YoutubePlayer from "react-native-youtube-iframe";
// // import MenuAppBar from '../header';
// // import "./home.css"

// // export default function Lecture() {
// //   const [playing, setPlaying] = useState(false);

// //   const onStateChange = useCallback((state) => {
// //     if (state === "ended") {
// //       setPlaying(false);
// //       Alert.alert("video has finished playing!");
// //     }
// //   }, []);

// //   const togglePlaying = useCallback(() => {
// //     setPlaying((prev) => !prev);
// //   }, []);

// //   return (
// //     <div class="float-container">
// //     <MenuAppBar />
// //     <h2> Lec 1: Introduction</h2>
// //     <View style={{ paddingLeft:"20px"}}>
// //       <YoutubePlayer
// //         height={560}
// //         width={1000}
// //         play={playing}
// //         videoId={"vq_vZZZlCb0"}
// //         onChangeState={onStateChange}
// //       />
// //       {/* <Button title={playing ? "pause" : "play"} onPress={togglePlaying} /> */}
// //     </View>
// //     </div>
// //   );
// // }

import React from 'react'
import ReactPlayer from 'react-player/youtube';
import MenuAppBar from '../../header';
import Button from '@mui/material/Button';
import './lecture.css';
import LecturePageTabs from "./lecturepage_tabs.js";

export default function Lecture() {
    var url ='https://www.youtube.com/watch?v=ysz5S6PUM-U';
    var lec_no = '1';
    var lec_title = 'Introduction';
    return (
    <div>
      <MenuAppBar />
      <h2> {lec_no}.{lec_title}</h2>
      <div style={{paddingLeft : '15px', paddingBottom : '10px'}}>
        <Button variant="outlined" href="/course">Back to Course Content</Button>
      </div>
      <div className='rowC' style = {{ paddingLeft : '15px'}}>
      <ReactPlayer url= {url} width = '1550px' height = '450px' />
      <LecturePageTabs style = {{paddingLeft : '15px'}}>
      </LecturePageTabs>
      </div>
    </div>
  );
}

// import React, { useState, useCallback, useRef } from "react";
// import { Button, View, Alert } from "react-native";
// import YoutubePlayer from "react-native-youtube-iframe";

// export default function Lecture() {
//   const [playing, setPlaying] = useState(false);

//   const onStateChange = useCallback((state) => {
//     if (state === "ended") {
//       setPlaying(false);
//       Alert.alert("video has finished playing!");
//     }
//   }, []);

//   const togglePlaying = useCallback(() => {
//     setPlaying((prev) => !prev);
//   }, []);

//   return (
//     <View>
//       <YoutubePlayer
//         height={300}
//         play={playing}
//         videoId={"iee2TATGMyI"}
//         onChangeState={onStateChange}
//       />
//       <Button title={playing ? "pause" : "play"} onPress={togglePlaying} />
//     </View>
//   );
// }