import React from 'react'
import Tooltip from '../components/Tooltip'
import { IoMdInformationCircleOutline } from 'react-icons/io'

export default function Card({ seasonScore, playoffScore, totalScore, teamName, theme, champ, heni, seasons, slide }) {

  const [flipped, setFlipped] = React.useState(false)
  const handleClick = () => flipped === false ? setFlipped(true) : setFlipped(false)
  
  return (
    <>
      {!flipped ? (     //Card front
        <div className='card noselect' style={{ backgroundColor: theme.color, borderColor: theme.borderColor }} onClick={handleClick}>
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
          <div className='card-name'>{teamName}
          </div>
        </div>
      ) 
      : 
      (           //Card back
          <div className='card card-flip noselect' style={{ backgroundColor: theme.color, borderColor: theme.borderColor }} onClick={handleClick}>
            <div className='card-stats'>
              <div className='card-a'>Champs.</div>
              <div className='card-b'>{champ.length}</div>
              <div className='card-c'>
                <Tooltip text={champ.length > 0 ? champ.join(", ") : 'No championships'}>
                  <IoMdInformationCircleOutline className='info-icon' />
                </Tooltip>
              </div>
            </div>
            <hr align='center' />
            <div className='card-stats'>
              <div className='card-a'>Henicups</div>
              <div className='card-b'>{heni.length}</div>
              <div className='card-c'>
                <Tooltip text={heni.length > 0 ? heni.join(", ") : 'No Henicups'}>
                  <IoMdInformationCircleOutline className='info-icon' />
                </Tooltip>
              </div>
            </div>
            <hr />
            <div className='card-stats'>
              <div className='card-sub'>Seasons</div>
              <div className='card-score'>{seasons}</div>
            </div>
            <hr />
            <div className='card-name'>{teamName}</div>
            <div />
          </div>)
      }
    </>
  )
}
