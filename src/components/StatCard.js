import React from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

function StatCard({ stats, theme }) {
    return (
        <div className='stat-card' style={{ backgroundColor: theme.color, borderColor: theme.borderColor }}>
            <div>
                <List>
                    <ListItem>
                        <ListItemText primary='Highest Regular Season Points: ' secondary={stats.highestPts} style={{ color: 'white', border: 0 }} />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary='Best Season Record: ' secondary={stats.bestRec} style={{ color: 'white', border: 0 }} />
                    </ListItem>
                </List>
            </div> 
            <div>
                <List>
                    <ListItem>
                        <ListItemText primary='Forward Ranking: ' secondary={stats.fRank} style={{ color: 'white', border: 0 }} />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary='Defence Ranking: ' secondary={stats.dRank} style={{ color: 'white', border: 0 }} />
                    </ListItem>
                </List>
            </div>
            <div>
                <List>
                    <ListItem>
                        <ListItemText primary='Goalie Ranking: ' secondary={stats.gRank} style={{ color: 'white', border: 0 }} />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary='Fantasy Points Ranking: ' secondary={stats.pRank} style={{ color: 'white', border: 0 }} />
                    </ListItem>
                </List>
            </div>
        </div>
    )
}
export default StatCard