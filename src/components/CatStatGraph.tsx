import styles from '@/styles/Home.module.css'
import React, { useState, useEffect } from "react";
import { Line } from 'react-chartjs-2';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    TimeScale,
    TimeSeriesScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    scales,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    TimeScale,
    TimeSeriesScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    interaction: {
        mode: 'index' as const,
        intersect: false,
    },
    stacked: false,
    plugins: {
        title: {
            display: true,
            text: '#CatStats',
        },
    },
    scales: {
        x: {
            display: true,
        },
        y: {
            type: 'linear' as const,
            display: true,
            position: 'left' as const,
        },
        y1: {
            type: 'linear' as const,
            display: false,
            position: 'left' as const,

        },
    },
};


export const data = {
    datasets: [
        {
            label: 'Cowgirl',
            data: [
                { x: '2024-04-30 12:00:00', y: 1.300 },
                { x: '2024-05-01 07:35:00', y: 1.450 },
                { x: '2024-05-01 12:30:00', y: 1.437 },
                { x: '2024-05-01 20:15:00', y: 1.542 },
                { x: '2024-05-02 08:10:00', y: 1.615 },
                { x: '2024-05-02 17:00:00', y: 1.615 },
                { x: '2024-05-03 08:20:00', y: 1.604 },
                { x: '2024-05-03 20:20:00', y: 1.644 },
                { x: '2024-05-04 08:40:00', y: 1.675 },
                { x: '2024-05-04 14:20:00', y: 1.668 },
                { x: '2024-05-05 15:20:00', y: 1.686 },
                { x: '2024-05-06 12:00:00', y: 1.787 },
                { x: '2024-05-07 16:30:00', y: 1.838 },
                { x: '2024-05-08 19:15:00', y: 1.864 },
                { x: '2024-05-09 18:10:00', y: 1.875 },
                { x: '2024-05-10 09:45:00', y: 1.988 },
            ],
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            yAxisID: 'y',
        },
        {
            label: 'Susan Tabs',
            data: [
                { x: '2024-04-30 12:00:00', y: 1.300 },
                { x: '2024-05-01 07:35:00', y: 1.470 },
                { x: '2024-05-01 12:30:00', y: 1.450 },
                { x: '2024-05-01 20:15:00', y: 1.487 },
                { x: '2024-05-02 08:10:00', y: 1.575 },
                { x: '2024-05-02 17:00:00', y: 1.575 },
                { x: '2024-05-03 08:20:00', y: 1.569 },
                { x: '2024-05-03 20:20:00', y: 1.653 },
                { x: '2024-05-04 08:40:00', y: 1.683 },
                { x: '2024-05-04 14:20:00', y: 1.650 },
                { x: '2024-05-05 15:20:00', y: 1.701 },
                { x: '2024-05-06 12:00:00', y: 1.703 },
                { x: '2024-05-07 16:30:00', y: 1.745 },
                { x: '2024-05-08 19:15:00', y: 1.789 },
                { x: '2024-05-09 18:10:00', y: 1.832 },
                { x: '2024-05-10 09:45:00', y: 1.888 },

            ],
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
            yAxisID: 'y1',
        },
    ],
};

export default function CatStatGraph() {
    return (
        <Line options={options} data={data} />
    )
}

// import * as d3 from "d3";
// // import d3 from 'd3';
// import { useRef, useMemo } from "react";
// import { timeYear, timeMonth, timeWeek, timeDay, timeHour, timeMinute, timeSecond, timeTicks, timeTickInterval } from "d3-time";
// import { timeFormat } from "d3-time-format";

// const x = d3.scaleTime([new Date(2000, 0, 1), new Date(2000, 0, 2)], [0, 960]);
// x(new Date(2000, 0, 1, 5)); // 200
// x(new Date(2000, 0, 1, 16)); // 640
// x.invert(200); // Sat Jan 01 2000 05:00:00 GMT-0800 (PST)
// x.invert(640); // Sat Jan 01 2000 16:00:00 GMT-0800 (PST)
// x.ticks(10);

// const Axis = () => {
//     const ticks = useMemo(() => {
//         const xScale = d3.scaleUtc().domain([new Date("2024-04-30T00:00Z"), new Date("2024-05-30T02:00Z")]);
//         // const xScale = d3.scaleTime([new Date(2000, 0, 1), new Date(2000, 0, 2)], [0, 960])
//         // // .domain([0, 100])
//         // // .range([10, 290])
//         return xScale.ticks()
//         // .map(value => ({
//         //     value,
//         //     xOffset: xScale(value)
//         // }))
//     }, [])
//     return (
//         <svg>
//             <path
//                 d="M 0 0 H 500"
//                 stroke="currentColor"
//             />
//             {x.map(() => (
//                 <g
//                     //key={value}
//                     transform={`translate(${xOffset}, 0)`}
//                 >
//                     <line
//                         y2="6"
//                         stroke="currentColor"
//                     />
//                     <text
//                         // key={value}
//                         style={{
//                             fontSize: "10px",
//                             textAnchor: "middle",
//                             transform: "translateY(20px)"
//                         }}>
//                         {/* {value} */}
//                     </text>
//                 </g>
//             ))}
//         </svg>
//     )
// }

// export default function CatStatGraph(
//     {
//         data = [],
//         width = 640,
//         height = 400,
//         marginTop = 20,
//         marginRight = 20,
//         marginBottom = 30,
//         marginLeft = 40
//     }) {
//     // const gx = useRef();
//     // const gy = useRef();
//     // const x = d3.scaleLinear([0, data.length - 1], [marginLeft, width - marginRight]);
//     // const y = d3.scaleLinear([0, data.length - 1], [height - marginBottom, marginTop]);
//     // const line = d3.line((d, i) => x(i), y);
//     // useEffect(() => void d3.select(gx.current).call(d3.axisBottom(x)), [gx, x]);
//     // useEffect(() => void d3.select(gy.current).call(d3.axisLeft(y)), [gy, y]);
//     // const x = d3.scaleTime([new Date(2000, 0, 1), new Date(2000, 0, 2)], [0, 960]);
//     // const x = d3.scaleTime();
//     // x(new Date(2000, 0, 1, 5)); // 200
//     // x(new Date(2000, 0, 1, 16)); // 640
//     // x.invert(200); // Sat Jan 01 2000 05:00:00 GMT-0800 (PST)
//     // x.invert(640); // Sat Jan 01 2000 16:00:00 GMT-0800 (PST)
//     return (
//         <svg width={width} height={height} style={{ border: "2px solid black" }}>
//             {/* <g ref={gx} transform={`translate(0,${height - marginBottom})`} />
//             <g ref={gy} transform={`translate(${marginLeft},0)`} /> */}
//             {/* <path fill="none" stroke="currentColor" strokeWidth="1.5" d={line(data)} /> */}
//             {/* <g fill="white" stroke="currentColor" strokeWidth="1.5">
//                 {data.map((d, i) => (<circle key={i} cx={x(i)} cy={y(d)} r="2.5" />))}
//             </g> */}
//             <svg>
//                 <circle
//                     cx="150"
//                     cy="77"
//                     r="40"
//                 />
//             </svg>
//             <svg>
//                 <Axis></Axis>
//             </svg>
//         </svg>
//     );
// }

// import aapl from '/aapl.csv';
// const aapl = require('../../public/aapl.csv');

// const chart = () => {
//     // Declare the chart dimensions and margins.
//     const width = 928;
//     const height = 500;
//     const marginTop = 20;
//     const marginRight = 30;
//     const marginBottom = 30;
//     const marginLeft = 40;

//     // Declare the x (horizontal position) scale.
//     const x = d3.scaleUtc(d3.extent(aapl, d => d.date), [marginLeft, width - marginRight]);

//     // Declare the y (vertical position) scale.
//     const y = d3.scaleLinear([0, d3.max(aapl, d => d.close)], [height - marginBottom, marginTop]);

//     // Declare the line generator.
//     const line = d3.line()
//         .x(d => x(d.date))
//         .y(d => y(d.close));

//     // Create the SVG container.
//     const svg = d3.create("svg")
//         .attr("width", width)
//         .attr("height", height)
//         .attr("viewBox", [0, 0, width, height])
//         .attr("style", "max-width: 100%; height: auto; height: intrinsic;");

//     // Add the x-axis.
//     svg.append("g")
//         .attr("transform", `translate(0,${height - marginBottom})`)
//         .call(d3.axisBottom(x).ticks(width / 80).tickSizeOuter(0));

//     // Add the y-axis, remove the domain line, add grid lines and a label.
//     svg.append("g")
//         .attr("transform", `translate(${marginLeft},0)`)
//         .call(d3.axisLeft(y).ticks(height / 40))
//         .call(g => g.select(".domain").remove())
//         .call(g => g.selectAll(".tick line").clone()
//             .attr("x2", width - marginLeft - marginRight)
//             .attr("stroke-opacity", 0.1))
//         .call(g => g.append("text")
//             .attr("x", -marginLeft)
//             .attr("y", 10)
//             .attr("fill", "currentColor")
//             .attr("text-anchor", "start")
//             .text("↑ Daily close ($)"));

//     // Append a path for the line.
//     svg.append("path")
//         .attr("fill", "none")
//         .attr("stroke", "steelblue")
//         .attr("stroke-width", 1.5)
//         .attr("d", line(aapl));

//     return svg.node();
// }
