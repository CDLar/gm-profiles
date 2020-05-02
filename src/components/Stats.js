import React from 'react'
import { GmData } from '../data'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';


function Stats({ theme }) {
    const [activeBtn, setActiveBtn] = React.useState('Buckley')

    return (
        <div className='stats-wrapper' style={{ backgroundColor: theme.color, borderColor: theme.borderColor }}>
            <div className="team-nav">
                {Object.values(GmData).map(obj =>
                    <>
                        <Button
                            className='team-nav'
                            style={{
                                color: 'white', borderRadius: 0,
                                borderLeft: obj.id === activeBtn ? `15px solid ${theme.borderColor}` : '',
                                fontWeight: obj.id === activeBtn ? '700' : '400'
                            }}
                            onClick={() => setActiveBtn(obj.id)}
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
    )
}

export default Stats

