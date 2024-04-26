import React from 'react'
import { ResponsiveContainer,LineChart,Line,XAxis,YAxis,CartesianGrid,Tooltip } from 'recharts'
import trackingData from '../assets/dummy-data/trackingData'
const TrackingChart = () => {
  return (
    <ResponsiveContainer width='100%'>
        <LineChart >

        <CartesianGrid strokeDasharray='0' stroke='#fff'/>
        <XAxis dataKey='name' fill='#fff'/>
        <YAxis dataKey='mt' fill='#fff'/>
        <Line type='monotone' dataKey='km' data={trackingData} stroke='#4a3374' strokeWidth={2} activeDot={{r:8}}/>
        <Tooltip wrapperClassName='tooltip__style'/>
        </LineChart>

    </ResponsiveContainer>
  )
}

export default TrackingChart
