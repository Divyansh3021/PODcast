import React from 'react'

function QueueCard(props) {
  return (
    <div className='queue-card'>
        <div className="item-info">
            <img src={require("./assets/1.jpeg")} alt="" />
            <h3 className='item-title'>{props.title}</h3>
        </div>

        <div className="item-other-info">
            <div className="length">
                <img src={require("./assets/clock.png")} alt="" />
                <h3 className="item-length">{props.length}</h3>
            </div>

            <img src={require("./assets/bookmark.png")} alt="" style={{cursor: "pointer"}}/>
        </div>
    </div>
  )
}

export default QueueCard