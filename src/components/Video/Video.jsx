import React from "react";
import styles from "./Video.module.css";
function Video() {
  return (
    <div className={styles.iframe}>
      <div>
        <iframe
          className={styles.facts}
          src="https://www.youtube.com/embed/Ma07a6svw5w"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          title="COVID-19: The Facts"
        />
      </div>
      <div>
        <iframe
          className={styles.manage}
          src="https://www.youtube.com/embed/qPoptbtBjkg"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          title="COVID-19: The Facts"
        />
      </div>
    </div>
  );
}
export default Video;
