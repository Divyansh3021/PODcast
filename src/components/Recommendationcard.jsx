import React from 'react'

function Recommendationcard(props) {
  return (
    <div className='recommendation-card'>
        <div className="recommendation-thumbnail" style={{backgroundImage: "URL("+require("./assets/1.jpeg")+")"}}>
            <div className="recommendation-length">
                {props.length}
            </div>
            <img src={require("./assets/thumb-play.png")} alt="" />
        </div>

        <div className="recommendation-info">
            <h2 className="recommendation-title">{props.title}</h2>
            <div className="views"><img src={require("./assets/view.png")} alt="" />{props.views} views.  {props.upload_time} months ago</div>
        </div>
    </div>
  )
}

export default Recommendationcard