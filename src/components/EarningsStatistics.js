import React from 'react'



const EarningsStatistics = (props) => {
    const userData = props.userData
    return (
        <div>
            {/* Row 1 */}
            <div className='earnings-statistics-flex-box'>
                <div className='earnings-statistics-flex-box-1'>
                    <p className='earnings-statistics-flex-box-title'>Total Tips</p>
                    <span className='earnings-statistics-flex-box-numbers'>${parseFloat(userData.totalTips).toFixed(2)}</span>
                </div>
                <div className='earnings-statistics-flex-box-2'>
                    <p className='earnings-statistics-flex-box-title'>Total Hours</p>
                    <span className='earnings-statistics-flex-box-numbers'>{userData.totalHours}</span>
                </div>
                <div className='earnings-statistics-flex-box-3'>
                    <p className='earnings-statistics-flex-box-title'>Total Shifts</p>
                    <span className='earnings-statistics-flex-box-numbers'>{userData.totalShifts}</span>
                </div>
            </div>
            {/* Row 2 */}
            <div className='earnings-statistics-flex-box'>
                <div className='earnings-statistics-flex-box-1'>
                    <p className='earnings-statistics-flex-box-title'>Average Tips Per Shift</p>
                    <span className='earnings-statistics-flex-box-numbers'>${parseFloat(userData.avgTipsPerShift).toFixed(2)}</span>
                </div>
                <div className='earnings-statistics-flex-box-2'>
                    <p className='earnings-statistics-flex-box-title'>Average Tips Per Shift (Day)</p>
                    <span className='earnings-statistics-flex-box-numbers'>${parseFloat(userData.avgTipsPerDay).toFixed(2)}</span>
                </div>
                <div className='earnings-statistics-flex-box-3'>
                    <p className='earnings-statistics-flex-box-title'>Average Tips Per Shift (Night)</p>
                    <span className='earnings-statistics-flex-box-numbers'>${parseFloat(userData.avgTipsPerNight).toFixed(2)}</span>
                </div>
            </div>
            {/* Row 3 */}
            <div className='earnings-statistics-flex-box'>
                <div className='earnings-statistics-flex-box-1'>
                    <p className='earnings-statistics-flex-box-title'>Average Tips Per Hour</p>
                    <span className='earnings-statistics-flex-box-numbers'>${parseFloat(userData.avgPerHour).toFixed(2)}</span>
                </div>
                <div className='earnings-statistics-flex-box-2'>
                    <p className='earnings-statistics-flex-box-title'>Average Tips Per Hour (Day)</p>
                    <span className='earnings-statistics-flex-box-numbers'>${parseFloat(userData.avgPerHourDay).toFixed(2)}</span>
                </div>
                <div className='earnings-statistics-flex-box-3'>
                    <p className='earnings-statistics-flex-box-title'>Average Tips Per Hour (Night)</p>
                    <span className='earnings-statistics-flex-box-numbers'>${parseFloat(userData.avgPerHourNight).toFixed(2)}</span>
                </div>
            </div>
            {/* Row 4 */}
            <div className='earnings-statistics-flex-box-last-row'>
                <div className='earnings-statistics-flex-box-last-row-1'>
                    <p className='earnings-statistics-flex-box-title'>Best Shift</p>
                    <span className='earnings-statistics-flex-box-numbers'>${parseFloat(userData.bestShift).toFixed(2)}</span>
                </div>
                <div className='earnings-statistics-flex-box-last-row-2'>
                    <p className='earnings-statistics-flex-box-title'>Worst Shift</p>
                    <span className='earnings-statistics-flex-box-numbers'>${parseFloat(userData.worstShift).toFixed(2)}</span>
                </div>
            </div>
        </div>
    )
}

export default EarningsStatistics