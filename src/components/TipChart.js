import React from 'react'
import { Chart } from "react-google-charts";



const TipChart = (props) => {

    return (
        <div>
            <Chart
                className='tip-chart'
                height={'500px'}
                chartType="ScatterChart"
                loader={<div>Loading Chart</div>}
                data={props.shifts}
                options={{
                    pointSize: 15,
                    pointShape: { type: 'star', sides: 5 },
                    //Need to figure out how to make chart only animate at start
                    // animation: {
                    //     duration: 1000,
                    //     startup: true //This is the new option
                    // },
                    hAxis: {
                        title: 'Date',
                    },
                    vAxis: {
                        title: 'Total Tip Out In Dollars',
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