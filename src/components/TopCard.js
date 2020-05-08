import React from 'react'
import { IoIosStar } from "react-icons/io";

function TopCard({ theme, records }) {
    return (
        <div className='top-card' style={{ backgroundColor: theme.color, borderColor: theme.borderColor }}>
            <div style={{ flex: 0.5, textAlign: 'center', maxHeight: '50px' }}>
                <h2 className='roster-head'>Three Stars</h2>
            </div>
            <div className='star-card'>
                <div>
                    <IoIosStar color='white' size={20} />
                </div>
                <div>
                    <span style={{ display: 'inline-block', fontSize: '20px' }}>#</span><span style={{ display: 'inline-block', fontSize: '2rem' }}>{records.first.num}</span>
                    <span style={{ display: 'block', paddingBottom: '0.3em' }}>{records.first.pos}</span>
                </div>
                <div >
                    <span>{records.first.fname}</span>
                    <span>{records.first.lname}</span>
                </div>
                <div >
                    <span style={{ fontSize: '2rem' }}>{records.first.avg}</span>
                    <span>Avg</span>
                </div>
                <div >
                    <span style={{ fontSize: '2rem' }}>{records.first.points}</span>
                    <span>FtPts</span>
                </div>
                <div>
                    <img src={records.first.picURL} height='99' width='99' alt='pic' style={{ borderColor: theme.borderColor }} />
                </div>
            </div>
            <div className='star-card'>
                <div>
                    <IoIosStar color='white' size={20} />
                    <IoIosStar color='white' size={20} />
                </div>
                <div>
                    <span style={{ display: 'inline-block', fontSize: '20px' }}>#</span><span style={{ display: 'inline-block', fontSize: '2rem' }}>{records.second.num}</span>
                    <span style={{ display: 'block', paddingBottom: '0.3em' }}>{records.second.pos}</span>
                </div>
                <div >
                    <span>{records.second.fname}</span>
                    <span>{records.second.lname}</span>
                </div>
                <div >
                    <span style={{ fontSize: '2rem' }}>{records.second.avg}</span>
                    <span>Avg</span>
                </div>
                <div >
                    <span style={{ fontSize: '2rem' }}>{records.second.points}</span>
                    <span>FtPts</span>
                </div>
                <div>
                    <img src={records.second.picURL} height='99' width='99' alt='pic' style={{ borderColor: theme.borderColor }} />
                </div>
            </div>
            <div className='star-card'>
                <div>
                    <IoIosStar color='white' size={20} />
                    <IoIosStar color='white' size={20} />
                    <IoIosStar color='white' size={20} />
                </div>
                <div>
                    <span style={{ display: 'inline-block', fontSize: '20px' }}>#</span><span style={{ display: 'inline-block', fontSize: '2rem' }}>{records.third.num}</span>
                    <span style={{ display: 'block', paddingBottom: '0.3em' }}>{records.third.pos}</span>
                </div>
                <div >
                    <span>{records.third.fname}</span>
                    <span>{records.third.lname}</span>
                </div>
                <div >
                    <span style={{ fontSize: '2rem' }}>{records.third.avg}</span>
                    <span>Avg</span>
                </div>
                <div >
                    <span style={{ fontSize: '2rem' }}>{records.third.points}</span>
                    <span>FtPts</span>
                </div>
                <div>
                    <img src={records.third.picURL} height='99' width='99' alt='pic' style={{ borderColor: theme.borderColor }} />
                </div>
            </div>
        </div >
    )
}
export default TopCard