import React from 'react'
import PropTypes from 'prop-types'

export default function Card ({ seasonScore, playoffScore, totalScore, teamName }) {
  return (
    <div className='card bg-light'>
      <div className='card-col'>
        <ul>
            <li>{`Season: ${seasonScore}`}</li>
            <li>{`Playoff: ${playoffScore}`}</li>
            <li>{`Total: ${totalScore}`}</li>
        </ul>
      </div>
      <div className='card-col'>
        <h1>{teamName}</h1>
      </div>
    </div>
  )
}