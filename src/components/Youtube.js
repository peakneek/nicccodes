
import React from "react"

const Youtube = ({ videoSrcURL, videoTitle, ...props }) => (
  <div>
    <iframe width="500" height="300" src={videoSrcURL} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>
)
export default Youtube;