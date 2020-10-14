import React, { useState, useEffect } from 'react'
const store = require('store2')

const EarningsStatistics = () => {
    const [userData, setUserData] = useState([])

    useEffect(() => {
        let userID = store.get('user').id
        fetch(`http://localhost:3000/users/${userID}`)
            .then(resp => resp.json())
            .then(data => {
                setUserData(data)
            })
    }, [])

    console.log(userData)
    return (
        <div>
            {/* Row 1 */}
            <div className='earnings-statistics-flex-box'>
                <div className='earnings-statistics-flex-box-1'>
                    <p className='earnings-statistics-flex-box-title'>Total Tips</p>
                    <span>${parseFloat(userData.totalTips).toFixed(2)}</span>
                </div>
                <div className='earnings-statistics-flex-box-2'>
                    <p className='earnings-statistics-flex-box-title'>Total Hours</p>
                    <span>{userData.totalHours}</span>
                </div>
                <div className='earnings-statistics-flex-box-3'>
                    <p className='earnings-statistics-flex-box-title'>Total Shifts</p>
                    <span>{userData.totalShifts}</span>
                </div>
            </div>
            {/* Row 2 */}
            <div className='earnings-statistics-flex-box'>
                <div className='earnings-statistics-flex-box-1'>
                    <p className='earnings-statistics-flex-box-title'>Average Tips Per Shift</p>
                    <span>${parseFloat(userData.avgTipsPerShift).toFixed(2)}</span>
                </div>
                <div className='earnings-statistics-flex-box-2'>
                    <p className='earnings-statistics-flex-box-title'>Average Tips Per Shift (Day)</p>
                    <span>${parseFloat(userData.avgTipsPerDay).toFixed(2)}</span>
                </div>
                <div className='earnings-statistics-flex-box-3'>
                    <p className='earnings-statistics-flex-box-title'>Average Tips Per Shift (Night)</p>
                    <span>${parseFloat(userData.avgTipsPerNight).toFixed(2)}</span>
                </div>
            </div>
            {/* Row 3 */}
            <div className='earnings-statistics-flex-box'>
                <div className='earnings-statistics-flex-box-1'>
                    <p className='earnings-statistics-flex-box-title'>Average Tips Per Hour</p>
                    <span>${parseFloat(userData.avgPerHour).toFixed(2)}</span>
                </div>
                <div className='earnings-statistics-flex-box-2'>
                    <p className='earnings-statistics-flex-box-title'>Average Tips Per Hour (Day)</p>
                    <span>${parseFloat(userData.avgPerHourDay).toFixed(2)}</span>
                </div>
                <div className='earnings-statistics-flex-box-3'>
                    <p className='earnings-statistics-flex-box-title'>Average Tips Per Hour (Night)</p>
                    <span>${parseFloat(userData.avgPerHourNight).toFixed(2)}</span>
                </div>
            </div>
            {/* Row 4 */}
            <div className='earnings-statistics-flex-box-last-row'>
                <div className='earnings-statistics-flex-box-last-row-1'>
                    <p className='earnings-statistics-flex-box-title'>Best Shift</p>
                    <span>${parseFloat(userData.bestShift).toFixed(2)}</span>
                </div>
                <div className='earnings-statistics-flex-box-last-row-2'>
                    <p className='earnings-statistics-flex-box-title'>Worst Shift</p>
                    <span>${parseFloat(userData.worstShift).toFixed(2)}</span>
                </div>
            </div>
        </div>
    )
}

export default EarningsStatistics