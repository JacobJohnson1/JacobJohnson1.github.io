// import styles from '@/styles/Home.module.css'
import React, { useState, useEffect } from "react";
// import { Line } from 'react-chartjs-2';

// import {
//     Chart as ChartJS,
//     CategoryScale,
//     LinearScale,
//     TimeScale,
//     TimeSeriesScale,
//     PointElement,
//     LineElement,
//     Title,
//     Tooltip,
//     Legend,
//     scales,
// } from 'chart.js';

// ChartJS.register(
//     CategoryScale,
//     TimeScale,
//     TimeSeriesScale,
//     LinearScale,
//     PointElement,
//     LineElement,
//     Title,
//     Tooltip,
//     Legend
// );

// export const options = {
//     responsive: true,
//     interaction: {
//         mode: 'index' as const,
//         intersect: false,
//     },
//     stacked: false,
//     plugins: {
//         title: {
//             display: true,
//             text: '#CatStats',
//         },
//     },
//     scales: {
//         x: {
//             display: true,
//         },
//         y: {
//             type: 'linear' as const,
//             display: true,
//             position: 'left' as const,
//         },
//         y1: {
//             type: 'linear' as const,
//             display: false,
//         },
//     },
// };


// export const data = {
//     datasets: [
//         {
//             label: 'Cowgirl',
//             data: [
//                 { x: '2024-04-30 12:00:00', y: 1.300 },
//                 { x: '2024-05-01 07:35:00', y: 1.450 },
//                 { x: '2024-05-01 12:30:00', y: 1.437 },
//                 { x: '2024-05-01 20:15:00', y: 1.542 },
//                 { x: '2024-05-02 08:10:00', y: 1.615 },
//                 { x: '2024-05-02 17:00:00', y: 1.615 },
//                 { x: '2024-05-03 08:20:00', y: 1.604 },
//                 { x: '2024-05-03 20:20:00', y: 1.644 },
//                 { x: '2024-05-04 08:40:00', y: 1.675 },
//                 { x: '2024-05-04 14:20:00', y: 1.668 },
//                 { x: '2024-05-05 15:20:00', y: 1.686 },
//                 { x: '2024-05-06 12:00:00', y: 1.787 },
//             ],
//             borderColor: 'rgb(255, 99, 132)',
//             backgroundColor: 'rgba(255, 99, 132, 0.5)',
//             yAxisID: 'y',
//         },
//         {
//             label: 'Susan Tabs',
//             data: [
//                 { x: '2024-04-30 12:00:00', y: 1.300 },
//                 { x: '2024-05-01 07:35:00', y: 1.470 },
//                 { x: '2024-05-01 12:30:00', y: 1.450 },
//                 { x: '2024-05-01 20:15:00', y: 1.487 },
//                 { x: '2024-05-02 08:10:00', y: 1.575 },
//                 { x: '2024-05-02 17:00:00', y: 1.575 },
//                 { x: '2024-05-03 08:20:00', y: 1.569 },
//                 { x: '2024-05-03 20:20:00', y: 1.653 },
//                 { x: '2024-05-04 08:40:00', y: 1.683 },
//                 { x: '2024-05-04 14:20:00', y: 1.650 },
//                 { x: '2024-05-05 15:20:00', y: 1.701 },
//                 { x: '2024-05-06 12:00:00', y: 1.703 },
//             ],
//             borderColor: 'rgb(53, 162, 235)',
//             backgroundColor: 'rgba(53, 162, 235, 0.5)',
//             yAxisID: 'y1',
//         },
//     ],
// };

// export default function CatStatGraph() {
//     return (
//         <Line options={options} data={data} />
//     )
// }

// import * as d3 from "d3";
import d3 from 'd3';
import { useRef } from "react";

export default function LinePlot(
    {
        data = [],
        width = 640,
        height = 400,
        marginTop = 20,
        marginRight = 20,
        marginBottom = 30,
        marginLeft = 40
    }) {
    const gx = useRef();
    const gy = useRef();
    // const x = d3.scaleLinear([0, data.length - 1], [marginLeft, width - marginRight]);
    // const y = d3.scaleLinear([0, data.length - 1], [height - marginBottom, marginTop]);
    // const line = d3.line((d, i) => x(i), y);
    // useEffect(() => void d3.select(gx.current).call(d3.axisBottom(x)), [gx, x]);
    // useEffect(() => void d3.select(gy.current).call(d3.axisLeft(y)), [gy, y]);
    return (
        <svg width={width} height={height} style={{ border: "2px solid black" }}>
            {/* <g ref={gx} transform={`translate(0,${height - marginBottom})`} />
            <g ref={gy} transform={`translate(${marginLeft},0)`} /> */}
            {/* <path fill="none" stroke="currentColor" strokeWidth="1.5" d={line(data)} /> */}
            {/* <g fill="white" stroke="currentColor" strokeWidth="1.5">
                {data.map((d, i) => (<circle key={i} cx={x(i)} cy={y(d)} r="2.5" />))}
            </g> */}
            <svg>
                <circle
                    cx="150"
                    cy="77"
                    r="40"
                />
            </svg>
        </svg>
    );
}