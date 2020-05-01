import React from 'react'
import { IoMdClose } from "react-icons/io";

function Settings({ theme, themes, setTheme, toggleSlide }) {
    return (
        <>
            <IoMdClose size={50} onClick={toggleSlide} className='settings' color={theme.color} />
            <div className='settings-wrapper'>
                <ul className='theme-grid'>
                    {Object.values(themes).map(obj =>
                        <li className='team-button noselect'
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
        </>
    )
}
export default Settings