import React from 'react'
import Recommendationcard from './Recommendationcard'
import "./styles/Recommendation.css"

function Recommendation() {
  return (
    <div className='recommendations'>
        <Recommendationcard src="./assets/1.jpeg" views="43243" upload_time="4" length="46:03" title="Life of a teenager"/>
        <Recommendationcard src="./assets/1.jpeg" views="43243" upload_time="4" length="46:03" title="Life of a teenager"/>
        <Recommendationcard src="./assets/1.jpeg" views="43243" upload_time="4" length="46:03" title="Life of a teenager"/>
        <Recommendationcard src="./assets/1.jpeg" views="43243" upload_time="4" length="46:03" title="Life of a teenager"/>
        <Recommendationcard src="./assets/1.jpeg" views="43243" upload_time="4" length="46:03" title="Life of a teenager"/>
        <Recommendationcard src="./assets/1.jpeg" views="43243" upload_time="4" length="46:03" title="Life of a teenager"/>
        <Recommendationcard src="./assets/1.jpeg" views="43243" upload_time="4" length="46:03" title="Life of a teenager"/>
        {/* <Recommendationcard src="./assets/1.jpeg" length="46:03" title="Life of a teenager"/> */}
        {/* <Recommendationcard src="./assets/1.jpeg" length="46:03" title="Life of a teenager"/> */}
        {/* <Recommendationcard src="./assets/1.jpeg" length="46:03" title="Life of a teenager"/> */}
    </div>
  )
}

export default Recommendation