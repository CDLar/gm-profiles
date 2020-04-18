import React from 'react'
import { GmData } from '../data'
import Card from './Card'
import ThemeContext, { themes } from '../context/theme'

export default function GmStats() {
    const [theme, setTheme] = React.useState(themes.wpgTheme)
    
    return (
            <div className="gm-grid" style={theme}>
                {Object.values(GmData).map(obj => <Card key={obj.id} {...obj.gmRanking} theme={theme}/>)}
            </ div>
    )
}