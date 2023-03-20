import React from 'react'
import "./styles/recommendations.css"

function Recommendation_card(props) {
  return (
    <div className='recommendation_card' style={{backgroundImage: "url("+props.img+")"}}>
        <div className="card-content">
          <img src={require("./assets/play-btn.png")} alt="" className="play_icon" />
          <h3 className='recommend-card-title'>{props.title.slice(0,30)}...</h3>
        </div>
    </div>
  )
}

export default Recommendation_card