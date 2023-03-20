import React from 'react'
import "./styles/navbar.css"

function Navbar() {
  return (
    <div className='top-nav-body'>
        <div className="top-nav">
            <div className="icon">
                <img src={require("../components/assets/podcast_icon.png")} alt="Yoda" />
            </div>
            <h2 className="nav-title">PODcast</h2>
            <div className="nav-pages">
                <h4 className="nav-page">Discover</h4>
                <h4 className="nav-page">Trending</h4>
                {/* <h4 className="nav-page"></h4> */}
            </div>

            <div className="nav-search">
                <input type="text" placeholder="Search podcast" name="search"/>
                <button type="submit"><img src={require("./assets/search.png")} alt="" /></button>
            </div>
        </div>

        
    </div>
  )
}

export default Navbar