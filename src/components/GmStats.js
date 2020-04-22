import React from 'react'
import { GmData } from '../data'
import Card from './Card'
import { themes } from '../context/theme'
import { IoMdSettings, IoMdClose } from "react-icons/io";


export default function GmStats() {
    const savedTheme = JSON.parse(localStorage.getItem('theme'))
    const [theme, setTheme] = React.useState(savedTheme || themes.wpgTheme)
    const [slide, setSlide] = React.useState(false)
    const toggleSlide = () => setSlide((slider) => slider === true ? false : true)

    return (
        <div className='wrapper' style={theme}>
            <IoMdSettings size={50} onClick={toggleSlide} className='settings' />
            <div id='settings-box' className={`settings-box ${slide ? "slide-in" : "slide-out"}`} style={{ backgroundColor: theme.color, color: 'white', fontSize: '5rem' }}>
                <IoMdClose size={50} onClick={toggleSlide} className='settings' color={theme.color} />
                <div className='settings-wrapper'>
                    <ul className='theme-grid'>
                        {Object.values(themes).map(obj =>
                            <li className='team-button'
                                onClick={() => {
                                    setTheme(obj);
                                    toggleSlide();
                                    localStorage.setItem('theme', JSON.stringify(obj))
                                }}
                                key={obj.id}
                                style={{ backgroundColor: obj.color, borderColor: obj.borderColor }}>
                                {obj.team}
                            </li>)}
                    </ul>
                </div>
            </div>
            <div className="gm-grid">
                {Object.values(GmData).map(obj =>
                    <Card
                        key={obj.id}
                        {...obj.gmRanking}
                        theme={theme}
                    />)}
            </div>
            {console.log(Object.values(localStorage))}
        </div>
    )
}
