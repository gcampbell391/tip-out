import React, { useEffect, useState } from 'react'
import { Chart } from "react-google-charts";


const TipChart = (props) => {

    const [shifts, setShifts] = useState([['x', 'night', 'day'], ['2/1/20', 0, 0]])


    //Fetch user shifts to display in chart
    useEffect(() => {
        fetch(`http://localhost:3000/users/${props.userID}`)
            .then(resp => resp.json())
            .then(data => {
                data.shifts.forEach(shift => {
                    let day = 0
                    let night = 0
                    if (shift.shift_type === "day") {
                        day = shift.pay_total
                    }
                    else {
                        night = shift.pay_total
                    }
                    setShifts(shifts => [...shifts, [shift.shift_date, parseInt(night), parseInt(day)]])
                })
            })
    }, [props.userID])

    console.log(shifts)
    // const data = [
    //     ['x', 'night', 'day'],
    //     [0, 0, 0],
    //     [1, 10, 5],
    //     [2, 23, 15],
    //     [5, 17, 9],
    //     [4, 18, 10],
    //     [5, 9, 5],
    //     [6, 11, 3],
    //     [7, 27, 19],
    // ]
    return (
        <div>
            <Chart
                className='tip-chart'
                height={'500px'}
                chartType="ScatterChart"
                loader={<div>Loading Chart</div>}
                data={shifts}
                options={{
                    animation: {
                        duration: 1000,
                        easing: 'out',
                        startup: true,
                    },
                    hAxis: {
                        title: 'Date',
                    },
                    vAxis: {
                        title: 'Total Tip Out',
                        viewWindow: {
                            min: 0
                        }
                    },
                    series: {
                        1: { curveType: 'function' },
                    },
                }}
                rootProps={{ 'data-testid': '2' }}
            />
        </div>
    )
}

export default TipChart