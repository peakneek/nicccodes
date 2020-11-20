
import React from "react"

const Youtube = ({ videoSrcURL, videoTitle, ...props }) => (
  <div>
    <iframe width="700" height="400" src={videoSrcURL} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>
)
export default Youtube;