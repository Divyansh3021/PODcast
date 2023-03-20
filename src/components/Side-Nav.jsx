import React from 'react'

function Side_Nav() {
  return (
    <div className="side-nav">
            <img src={require("../components/assets/play.png")} alt="Play" />
            <img src={require("../components/assets/bookmark.png")} alt="Bookmark" />
        </div>
  )
}

export default Side_Nav