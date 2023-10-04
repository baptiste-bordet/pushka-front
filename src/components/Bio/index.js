import React from 'react'
import section from '../../containers/Section'

import './index.scss'

const Bio = ({ bio }) => {
  return (
    <div className="bio-wrapper">
      <div className="description" dangerouslySetInnerHTML={{ __html: bio.description }} />

      {/*<img src={`${process.env.REACT_APP_BACKEND_URL}${bio.image.url}`} alt="bio-pic" />*/}
      <div className="bio-members">
        <div>Chant – Aurélien DEJEAN</div>
        <div>Accordéon – Jérémie POTTIER</div>
        <div>Batterie – Mathieu ALLAIN</div>
        <div>Basse – Joffrey DESCHODT</div>
        <div>Clavier – Christophe MAILLARD</div>
        <div>Trompette – Charly JACQUET</div>
        <div>Trompette – Baptiste BORDET</div>
      </div>
    </div>
  )
}

export default section(Bio, { id: 'bio', title: 'BIO' })
