import React from 'react'

function Carausel(props) {
  return (
        <div className="carausel-slide" style={{background: "url("+props.bg_url+")"}}><button className='play-btn'><img className='play-btn' src={require("./assets/play-btn.png")} alt="" />Play</button></div>
        // <div className="carausel-slide"><button className='play-btn'><img className='play-btn' src={require("./assets/play-btn.png")} alt="" /> Play2</button></div>
        // <div className="carausel-slide"><button className='play-btn'><img className='play-btn' src={require("./assets/play-btn.png")} alt="" /> Play3</button></div>
  )
}

export default Carausel