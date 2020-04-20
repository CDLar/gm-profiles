import React from 'react'
import { IoMdSettings } from "react-icons/io";
import { GmData } from '../data'
import Card from './Card'
import Settings from './Settings'
import { themes } from '../context/theme'

export default function GmStats() {
    const [theme, setTheme] = React.useState(themes.wpgTheme)
    return (
        <div className='wrapper' style={theme}>
        <Settings/>
            <IoMdSettings size={50} className='settings'/>
            <div className="gm-grid">
                {Object.values(GmData).map(obj => <Card key={obj.id} {...obj.gmRanking} theme={theme} />)}
            </div>
            {console.log(themes)}
        </div>
    )
}