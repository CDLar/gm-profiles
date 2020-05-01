import React from 'react'
import CardGrid from './CardGrid'
import Settings from './Settings'
import { themes } from '../context/theme'
import { IoMdSettings } from "react-icons/io";


export default function GmStats() {
    const savedTheme = JSON.parse(localStorage.getItem('theme'))
    const [theme, setTheme] = React.useState(savedTheme || themes.wpgTheme)
    const [slide, setSlide] = React.useState(false)
    const toggleSlide = () => setSlide((slider) => slider === true ? false : true);

    return (
        <div className='wrapper' style={theme}>
            <IoMdSettings size={50} onClick={toggleSlide} className='settings' />
            <div id='settings-box' className={`settings-box ${slide ? "slide-in" : "slide-out"}`} style={{ backgroundColor: theme.color, color: 'white', fontSize: '5rem' }}>
                
                <Settings theme={theme} themes={themes} setTheme={setTheme} toggleSlide={toggleSlide}/>
                
            </div>
            <CardGrid theme={theme} slide={slide}/>
        </div>
    )
}
