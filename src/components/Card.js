import React from 'react'
import PropTypes from 'prop-types'

export default function Card({ seasonScore, playoffScore, totalScore, teamName, theme }) {

  const [flipped, setFlipped] = React.useState(false)
  const handleClick = () => flipped === false ? setFlipped(true) : setFlipped(false)

  return (
    <div className='card noselect' style={{ backgroundColor: theme.color, borderColor: theme.borderColor }} onClick={handleClick}>
      {!flipped ? (
        <>
          <div className='card-stats'>
            <div className='card-sub'>season</div>
            <div className='card-score'>{seasonScore}</div>
          </div>
          <hr align='center' />
          <div className='card-stats'>
            <div className='card-sub'>playoff</div>
            <div className='card-score'>{playoffScore}</div>
          </div>
          <hr />
          <div className='card-stats'>
            <div className='card-sub'>overall</div>
            <div className='card-score'>{totalScore}</div>
          </div>
          <hr />
          <div className='card-name'>{teamName}</div>
        </>
      ) :
        <>
          <div className='card-stats'>
            <div className='card-sub'>Championships</div>
            <div className='card-score'></div>
          </div>
          <hr align='center' />
          <div className='card-stats'>
            <div className='card-sub'>Henicups</div>
            <div className='card-score'>{playoffScore}</div>
          </div>
          <hr />
          <div className='card-stats'>
            <div className='card-sub'>overall</div>
            <div className='card-score'>{totalScore}</div>
          </div>
          <hr />
          <div className='card-name'>{teamName}</div>
        </>
      }
    </div>
  )
}

