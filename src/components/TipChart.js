import React from 'react'
import { Chart } from "react-google-charts";



const TipChart = (props) => {

    //Take off first array and add it back after sort
    return (
        <div>
            <Chart
                className='tip-chart'
                height={'500px'}
                chartType="ScatterChart"
                loader={<div>Loading Chart</div>}
                data={props.shifts}
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