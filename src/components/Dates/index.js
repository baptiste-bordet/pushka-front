import React, { useEffect, useState } from 'react'
import './index.scss'

import section from '../../containers/Section'

import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'

dayjs.extend(customParseFormat)

const MONTHS = [
  'janvier',
  'février',
  'mars',
  'avril',
  'mai',
  'juin',
  'juillet',
  'août',
  'septembre',
  'octobre',
  'novembre',
  'décembre'
]

const DateBloc = ({ date, nom, lieu, lien, covide, index }) => (
  <div key={`date-${index}`} className="date">
    <div className="date-date">
      <div className="day">{date.split('/')[0]}</div>
      <div className="date-rest">
        <div className="month">{MONTHS[parseInt(date.split('/')[1]) - 1]}</div>
        <div className="year">{date.split('/')[2]}</div>
      </div>
    </div>
    {nom && <div className="nom">{nom}</div>}
    {lieu && <div>{lieu}</div>}
    {lien && <div>{lien}</div>}
    {covide && <div className="covide">COVIDÉ</div>}
  </div>
)

const NB_STEP_ITEMS = 4

const Dates = ({ dates }) => {
  const [nextDate, setNextDate] = useState([])
  const [pastDate, setPastDate] = useState([])
  const [nbDisplayPastDate, setNbDisplayPastDate] = useState(NB_STEP_ITEMS)

  useEffect(() => {
    setNextDate(dates.filter(({ date }) => dayjs(date, 'DD/MM/YYYY').isAfter(dayjs())).reverse())
    setPastDate(dates.filter(({ date }) => dayjs(date, 'DD/MM/YYYY').isBefore(dayjs())).reverse())
  }, [dates])

  const displayMore = () => {
    setNbDisplayPastDate(nbDisplayPastDate + NB_STEP_ITEMS)
  }

  return (
    <>
      <div className="date-wrapper">
        {nextDate.length > 0 ? (
          nextDate.map((props, index) => <DateBloc {...props} key={index} />)
        ) : (
          <div className="date-empty">A venir...</div>
        )}
      </div>

      <h3 className="past-title">Concerts passés :</h3>
      <div className="date-wrapper">
        {pastDate.slice(0, nbDisplayPastDate).map((props, index) => (
          <DateBloc {...props} key={index} />
        ))}
      </div>
      {pastDate.length > nbDisplayPastDate && (
        <span className="display-more" onClick={displayMore}>
          Afficher plus
        </span>
      )}
    </>
  )
}

export default section(Dates, {
  id: 'dates',
  title: 'DATES',
  color: '#16181b'
})
