import React from 'react'
import Roster from './Roster'
import { GmData } from '../data'
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

function Stats({ theme }) {
    const savedGm = JSON.parse(localStorage.getItem('savedGm'))
    const [activeGm, setActiveGm] = React.useState(savedGm || 'Buckley')
    const records = GmData[activeGm].records.topPlayers

    return (
        <div className='stats-wrapper'>
            <div className='nav-box' style={{ backgroundColor: theme.color, borderColor: theme.borderColor }}>
                <div className="team-nav">
                    {Object.values(GmData).map(obj =>
                        <>
                            <Button
                                className='nav-btn'
                                style={{
                                    color: 'white', borderRadius: 0,
                                    borderLeft: obj.id === activeGm ? `15px solid ${theme.borderColor}` : '',
                                    fontWeight: obj.id === activeGm ? '700' : '400'
                                }}
                                onClick={() => {
                                    setActiveGm(obj.id);
                                    localStorage.setItem('savedGm', JSON.stringify(obj.id))
                                }}
                                key={obj.id}
                                {...obj.gmRanking}
                                theme={theme}
                            >
                                {obj.gmRanking.teamName}</Button>
                            <Divider variant='middle' style={{ backgroundColor: theme.borderColor }} />
                        </>
                    )}
                </div>
            </div>
            <div className='stats-grid'>
                <Roster activeGm={activeGm} theme={theme} />
                <div className='top-card' style={{ backgroundColor: theme.color, borderColor: theme.borderColor }}>
                    <div style={{ flex: 0.5, textAlign: 'center', maxHeight: '50px' }}>
                        <h2 className='roster-head'>Three Stars</h2>
                    </div>
                    <div className='star-card'>
                        <div>
                            <span>TEMP</span>
                        </div>
                        <div>
                            <span style={{ display: 'inline-block', fontSize: '20px' }}>#</span><span style={{ display: 'inline-block', fontSize: '2rem' }}>{records.first.num}</span>
                            <span style={{ display: 'block', paddingBottom: '0.3em' }}>{records.first.pos}</span>
                        </div>
                        <div >
                            <span>{records.first.fname}</span>
                            <span>{records.first.lname}</span>
                        </div>
                        <div >
                            <span style={{ fontSize: '2rem' }}>{records.first.avg}</span>
                            <span>Avg</span>
                        </div>
                        <div >
                            <span style={{ fontSize: '2rem' }}>{records.first.points}</span>
                            <span>FtPts</span>
                        </div>
                        <div>
                            <img src={records.first.picURL} height='99' width='99' alt='pic' style={{ borderColor: theme.borderColor }} />
                        </div>
                    </div>
                    <div className='star-card'>
                        <div>
                            <span>TEMP</span>
                        </div>
                        <div>
                            <span style={{ display: 'inline-block', fontSize: '20px' }}>#</span><span style={{ display: 'inline-block', fontSize: '2rem' }}>{records.second.num}</span>
                            <span style={{ display: 'block', paddingBottom: '0.3em' }}>{records.second.pos}</span>
                        </div>
                        <div >
                            <span>{records.second.fname}</span>
                            <span>{records.second.lname}</span>
                        </div>
                        <div >
                            <span style={{ fontSize: '2rem' }}>{records.second.avg}</span>
                            <span>Avg</span>
                        </div>
                        <div >
                            <span style={{ fontSize: '2rem' }}>{records.second.points}</span>
                            <span>FtPts</span>
                        </div>
                        <div>
                            <img src={records.second.picURL} height='99' width='99' alt='pic' style={{ borderColor: theme.borderColor }} />
                        </div>
                    </div>
                    <div className='star-card'>
                        <div>
                            <span>TEMP</span>
                        </div>
                        <div>
                            <span style={{ display: 'inline-block', fontSize: '20px' }}>#</span><span style={{ display: 'inline-block', fontSize: '2rem' }}>{records.third.num}</span>
                            <span style={{ display: 'block', paddingBottom: '0.3em' }}>{records.third.pos}</span>
                        </div>
                        <div >
                            <span>{records.third.fname}</span>
                            <span>{records.third.lname}</span>
                        </div>
                        <div >
                            <span style={{ fontSize: '2rem' }}>{records.third.avg}</span>
                            <span>Avg</span>
                        </div>
                        <div >
                            <span style={{ fontSize: '2rem' }}>{records.third.points}</span>
                            <span>FtPts</span>
                        </div>
                        <div>
                            <img src={records.third.picURL} height='99' width='99' alt='pic' style={{ borderColor: theme.borderColor }} />
                        </div>
                    </div>
                </div >
                <div className='stat-card' style={{ backgroundColor: theme.color, borderColor: theme.borderColor }}>
                    <List>
                        <ListItem>
                            <ListItemText primary='Highest Regular Season Points: ' secondary={GmData[activeGm].records.highestPts} style={{ color: 'white', border: 0 }} />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary='Best Season Record: ' secondary={GmData[activeGm].records.bestRec} style={{ color: 'white', border: 0 }} />
                        </ListItem>
                    </List>
                </div>
            </div>
        </div>
    )
}

export default Stats