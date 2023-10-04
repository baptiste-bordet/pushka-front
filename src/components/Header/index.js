import React from 'react'
import './index.scss'

import Nav from '../Nav'

const Header = () => {
  return (
    <div className="header">
      {/*<img src={`${process.env.REACT_APP_BACKEND_URL}${banner.image.url}`} alt="banner-pic" />*/}

      <div className="video-wrapper">
        {/*<iframe width="560" height="315" src="https://www.youtube.com/embed/upW6TXrWilE?fs=1&autoplay=1&mute=1&showinfo=0&&v_load_policy=3&showinfo=0&modestbranding=1"*/}
        {/*        frameBorder="0"*/}
        {/*        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"*/}
        {/*        allowFullScreen*/}
        {/*        style={{ width: "100%", height: "55.8vw" }}*/}
        {/*></iframe>*/}
        {/*<img className={`fallback-banner ${displayFallback && "display-fallback"}`} src="/pushka_cover.jpg" alt="image cover"/>*/}

        <video autoPlay muted loop playsInline id="banner-video" className="video fullscreen-bg__video">
          <source src="/videos/pushka-cover-2.mp4" type="video/mp4" />
          <img src="/images/pushka_cover.jpg" alt="banner cover" />
        </video>

        {/*<div className="video-overlay"></div>*/}
        <img className="header-logo" src="/images/logo_blanc_transparence.png" alt="pushka logo" />
      </div>

      <Nav />
    </div>
  )
}

export default Header
