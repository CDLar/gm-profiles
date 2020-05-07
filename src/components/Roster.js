import React from 'react'
import { GmData } from '../data'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

export default function Roster({theme, activeGm}) {
    const [value, setValue] = React.useState(0)
    const handleChange = (event, newValue) => {
        setValue(newValue);
    }
    return (
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
                                                <TableCell className='roster-cell' align="right">{obj.FPts.toFixed(0)}</TableCell>
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
                                                <TableCell className='roster-cell' align="right">{obj.FPts.toFixed(0)}</TableCell>
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
                                                <TableCell className='roster-cell' align="right">{obj.FPts.toFixed(0)}</TableCell>
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
                                <b>{GmData[activeGm].s2020[value].toFixed(0)}</b>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>

            </div>
        </div>
    )
}