import React from 'react'
import { GmData } from '../data'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

function Stats({ theme }) {
    const savedGm = JSON.parse(localStorage.getItem('savedGm'))
    const [activeGm, setActiveGm] = React.useState(savedGm || 'Buckley')
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
            <div className='stats-grid' style={{ minHeight: '50vh' }}>
                <div className='roster-card' style={{ backgroundColor: theme.color, borderColor: theme.borderColor }}>
                    <div style={{ flex: 1, textAlign: 'center', maxHeight: '50px' }}>
                        <h2 className='roster-head'>Roster</h2>
                    </div>
                    <div style={{ flex: 1, }}>
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
                    <div style={{ flex: 6, display: 'flex' }}>
                        <Table size='small'>
                            <TableHead>
                                <TableRow>
                                    <TableCell style={{ color: 'white' }}>Name</TableCell>
                                    <TableCell style={{ color: 'white' }} align="right">FP/G</TableCell>
                                    <TableCell style={{ color: 'white' }} align="right">FtPts</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {Object.values(GmData[activeGm].s2020.players).map(obj => {
                                    if (value === 0) {
                                        return (
                                            <>
                                                {obj.Position === 'F' &&
                                                    <TableRow>
                                                        <TableCell className='roster-cell' component="th" scope="row">
                                                            {obj.Name}
                                                        </TableCell>
                                                        <TableCell className='roster-cell' align="right">{obj['FP/G'].toFixed(1)}</TableCell>
                                                        <TableCell className='roster-cell' align="right">{obj.FPts.toFixed(1)}</TableCell>
                                                    </TableRow>
                                                }
                                            </>)
                                    } else if (value === 1) {
                                        return (
                                            <>
                                                {obj.Position === 'D' &&
                                                    <TableRow>
                                                        <TableCell className='roster-cell' component="th" scope="row">
                                                            {obj.Name}
                                                        </TableCell>
                                                        <TableCell className='roster-cell' align="right">{obj['FP/G'].toFixed(1)}</TableCell>
                                                        <TableCell className='roster-cell' align="right">{obj.FPts.toFixed(1)}</TableCell>
                                                    </TableRow>
                                                }
                                            </>
                                        )
                                    } else if (value === 2) {
                                        return (
                                            <>
                                                {obj.Position === 'G' &&
                                                    <TableRow>
                                                        <TableCell className='roster-cell' component="th" scope="row">
                                                            {obj.Name}
                                                        </TableCell>
                                                        <TableCell className='roster-cell' align="right">{obj['FP/G'].toFixed(1)}</TableCell>
                                                        <TableCell className='roster-cell' align="right">{obj.FPts.toFixed(1)}</TableCell>
                                                    </TableRow>

                                                }
                                            </>
                                        )
                                    }
                                })}

                                <TableRow>
                                    <TableCell className='roster-cell' component="th" scope="row" />
                                    <TableCell className='roster-cell' align="right">
                                        <b>{(GmData[activeGm].s2020.avg[value] / (GmData[activeGm].s2020.len[value])).toFixed(1)}
                                        </b> 
                                    </TableCell>
                                    <TableCell className='roster-cell' align="right">
                                        <b>{GmData[activeGm].s2020[value].toFixed(1)}</b>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>

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