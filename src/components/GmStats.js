import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import CardGrid from './CardGrid'
import Settings from './Settings'
import Stats from './Stats'
import { themes } from '../context/theme'
import { IoMdSettings } from "react-icons/io";
import { RiNumbersLine } from 'react-icons/ri'

export default function GmStats() {
    const savedTheme = JSON.parse(localStorage.getItem('theme'))
    const [theme, setTheme] = React.useState(savedTheme || themes.wpgTheme)
    const [slide, setSlide] = React.useState(false)
    const toggleSlide = () => setSlide((slider) => slider === true ? false : true);

    const myCardGrid = (props) => {
        return (
            <CardGrid theme={theme} slide={slide} {...props} />
        );
    }

    return (
        <Router>
            <div className='wrapper' style={theme}>
                <IoMdSettings size={50} onClick={toggleSlide} className='settings' />
                <Link to ='/stats'>
                    <RiNumbersLine size={50} className='data-icon' />
                </Link>
                <div id='settings-box' className={`settings-box ${slide ? "slide-in" : "slide-out"}`} style={{ backgroundColor: theme.color, color: 'white', fontSize: '5rem' }}>
                    <Settings theme={theme} themes={themes} setTheme={setTheme} toggleSlide={toggleSlide} />
                </div>
                <Switch>
                    <Route exact path='/' render={myCardGrid} />
                    <Route exact path='/stats' component={Stats} />
                </Switch>
            </div>
        </Router>
    )
}
