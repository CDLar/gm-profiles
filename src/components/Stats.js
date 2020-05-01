import React from 'react'

function Stats({theme}) {
    return (
        <div className='stats-wrapper' style={{ backgroundColor: theme.color, borderColor: theme.borderColor }}>
            Hello
        </div>
    )
}

export default Stats