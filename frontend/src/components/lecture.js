// import React, { useState, useCallback, useRef } from "react";
// import { Button, View, Alert } from "react-native";
// import YoutubePlayer from "react-native-youtube-iframe";
// import MenuAppBar from '../header';
// import "./home.css"

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
//     <div class="float-container">
//     <MenuAppBar />
//     <h2> Lec 1: Introduction</h2>
//     <View style={{ paddingLeft:"20px"}}>
//       <YoutubePlayer
//         height={560}
//         width={1000}
//         play={playing}
//         videoId={"vq_vZZZlCb0"}
//         onChangeState={onStateChange}
//       />
//       {/* <Button title={playing ? "pause" : "play"} onPress={togglePlaying} /> */}
//     </View>
//     </div>
//   );
// }

import React from 'react'
import ReactPlayer from 'react-player/youtube'

export default function Lecture() {
    return (
    <div className="float-container">
      <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
    </div>
  );
}