import React from 'react'
import PropTypes from 'prop-types'

export default function Card({ seasonScore, playoffScore, totalScore, teamName, cardColor, cardBorder }) {
  
  
  return (
    <div className='card bg-light' style={{backgroundColor:cardColor, borderColor:cardBorder}}>
      <div className='card-stats'>
        <div className='card-sub'>season</div>
        <div className='card-score'>{seasonScore}</div>
      </div>
      <hr align='center'/>
      <div className='card-stats'>
        <div className='card-sub'>playoff</div>
        <div className='card-score'>{playoffScore}</div>
      </div>
      <hr/>
      <div className='card-stats'>
        <div className='card-sub'>overall</div>
        <div className='card-score'>{totalScore}</div>
      </div>
      <hr/>
      <div className='card-name'>{teamName}</div>
    </div>
  )
}