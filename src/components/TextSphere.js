import React, { useEffect, useRef } from "react";
import TagCloud from "TagCloud";

function TextSphere() {
  const containerRef = useRef(null);
  useEffect(() => {
    const container = containerRef.current;
    const texts = [
      "HTML",
      "CSS",
      "JavaScript",
      "ReactJs",
      "AJAX",
      "GIT",
      "GitHub",
      "NodeJs",
      "ExpressJs",
      "MongoDB",
      "FullStack",
    ];
    const screenWidth = window.innerWidth;
    const options = {
      radius: 300,
      maxSpeed: "normal",
      initSpeed: "normal",
      keep: true,
    };
    if (screenWidth <= 600) {
      options.radius = 200;
    }
    TagCloud(container, texts, options);
  }, []);
  return (
    <>
      <div className="text-sphere child-box">
        <span className="tagcloud" ref={containerRef}></span>
      </div>
    </>
  );
}

export default TextSphere;
