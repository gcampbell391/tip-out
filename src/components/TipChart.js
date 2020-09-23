import React from 'react'
import { Chart } from "react-google-charts";


const TipChart = () => {

    return (
        <div>
            <Chart
                className='tip-chart'
                height={'500px'}
                chartType="LineChart"
                loader={<div>Loading Chart</div>}
                data={[
                    ['x', 'night', 'day'],
                    [0, 0, 0],
                    [1, 10, 5],
                    [2, 23, 15],
                    [5, 17, 9],
                    [4, 18, 10],
                    [5, 9, 5],
                    [6, 11, 3],
                    [7, 27, 19],
                ]}
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