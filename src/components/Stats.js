import React from 'react'
import { GmData } from '../data'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

function Stats({ theme }) {
    const savedGm = JSON.parse(localStorage.getItem('savedGm'))
    const [activeBtn, setActiveBtn] = React.useState(savedGm || 'Buckley')
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

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
                                    borderLeft: obj.id === activeBtn ? `15px solid ${theme.borderColor}` : '',
                                    fontWeight: obj.id === activeBtn ? '700' : '400'
                                }}
                                onClick={() => {
                                    setActiveBtn(obj.id);
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
            <div className='stats-grid' style={{ minHeight: '50vh' }}>
                <div className='roster-card' style={{ backgroundColor: theme.color, borderColor: theme.borderColor }}>
                    <div style={{ flex: 1, textAlign: 'center' }}>
                        <h2 className='roster-head'>Roster</h2>
                    </div>
                    <div style={{ flex: 1 }}>
                        <Tabs
                            TabIndicatorProps={{ style: { backgroundColor: theme.borderColor } }}
                            value={value}
                            onChange={handleChange}
                            variant='fullWidth'
                        >
                            <Tab label="Forward" style={{ color: 'white' }} />
                            <Tab label="Defense" style={{ color: 'white' }} />
                            <Tab label="Goalie" style={{ color: 'white' }} />
                        </Tabs>
                    </div>
                    <div style={{ flex: 6 }}>
                        <ul>
                            {Object.values(GmData.Buckley.s2020.players).map(obj =>
                                <li style={{color:'white'}}>
                                    {obj.Name}
                                </li>)}
                            </ul>
                    </div>

                </div>
                <div className='top-card' style={{ backgroundColor: theme.color, borderColor: theme.borderColor }}>
                    <div>
                        <h2>#29 | Leon Draisaitl | Edmonton Oilers | 500 Ftps</h2>
                        <img src='https://assets.nhle.com/mugs/nhl/20192020/EDM/8477934.png' height='99' width='99' alt='pic' />
                    </div>
                    <div>
                        <h2>#29 | Leon Draisaitl | Edmonton Oilers | 500 Ftps</h2>
                        <img src='https://assets.nhle.com/mugs/nhl/20192020/EDM/8477934.png' height='99' width='99' alt='pic' />
                    </div>
                    <div>
                        <h2>#29 | Leon Draisaitl | Edmonton Oilers | 500 Ftps</h2>
                        <img src='https://assets.nhle.com/mugs/nhl/20192020/EDM/8477934.png' height='99' width='99' alt='pic' />
                    </div>
                </div>
                <div className='stat-card' style={{ backgroundColor: theme.color, borderColor: theme.borderColor }}>
                    <List>
                        <ListItem>
                            <ListItemText primary='hello' />
                        </ListItem>
                    </List>
                </div>
            </div>
        </div>
    )
}

export default Stats

