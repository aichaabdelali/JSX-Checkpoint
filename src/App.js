import React from "react";
import "./App.css";
import myImage from "./IMGinSrc.jpg";
function App() {
  return (
    <div className="App">
      <div
        style={{
          border: "solid 1 black",
          maxWidth: "100vw",
        }}
      >
        <h1 className="title red">Your name here</h1>
        <br />
        <img src="/IMGinPublic.jpg" /> <br />
        {<img src={myImage} />}
      </div>
      <video width="320" height="240" controls>
        <source src="myVideo.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default App;
