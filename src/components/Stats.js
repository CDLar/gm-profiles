import React from 'react'
import Roster from './Roster'
import StatCard from './StatCard'
import TopCard from './TopCard'
import { GmData } from '../data'
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

function Stats({ theme }) {
    const savedGm = JSON.parse(localStorage.getItem('savedGm'))
    const [activeGm, setActiveGm] = React.useState(savedGm || 'Buckley')
    const records = GmData[activeGm].records.topPlayers
    const stats = GmData[activeGm].records

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
                <TopCard records={records} theme={theme}/>
                <StatCard stats={stats} theme={theme} />
            </div>
        </div>
    )
}

export default Stats