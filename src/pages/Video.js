import React, { useRef, useState } from "react";
import "./video.css";

function Video() {
  const videoRef = useRef(null);
  const [play, setPlay] = useState(false);

  function handleStart() {
    if (play) {
      videoRef.current.play();
      setPlay(false);
    } else {
      videoRef.current.pause();
      setPlay(true);
    }
  }

  return (
    <div className="video">
      <video
        className="video__player"
        ref={videoRef}
        onClick={handleStart}
        loop
        src="https://webapp-va.tiktok.com/161415bcd92a7ed0b8161d0d02007baf/64263421/tos-useast2a-pve-0068/oI6guG3TAGeE7CSIraqCC4Do5DoiQgelfkCSbn?a=1988&ch=0&cr=0&dr=0&lr=tiktok&cd=0%7C0%7C0%7C0&br=1108&bt=554&cs=0&ds=3&ft=Ap6JtBiTq8ZmofAoCc_vjtnGqAhLrus&mime_type=video_mp4&qs=0&rc=NXZpTGRTaFBnKWZzZXpoaGRmOTk0OmY0aDo6Ozg5ZWg3PEBpajY6bzQ6Zjd3ajMzNzgzM0BTbGt2aXFEOmpoXitiK2p0OiM2YmAuNWJhXjExMzQyMV5iYSNebGwucjRvc2ZgLS1kLzZzcw%3D%3D&l=20230330191450E10B952914831C51DF31&btag=80000&ply_type=3&policy=eyJ2bSI6MywidWlkIjoiNjg5MzA1NTg4NTAyMDEyMDA2OSJ9"
      ></video>
    </div>
  );
}

export default Video;
