import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import React, { useState, useEffect } from "react";
import { posts } from "../data";
import Link from 'next/link';
import { Line } from 'react-chartjs-2';




import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    scales,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
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
            min: '2021-11-07 00:00:00',
            display: true,
        },
        y: {
            type: 'linear' as const,
            display: true,
            position: 'left' as const,
        },
        y1: {
            type: 'linear' as const,
            display: true,
            position: 'right' as const,
            grid: {
                drawOnChartArea: false,
            },
        },
    },
};


export const data = {
    datasets: [
        {
            label: 'Cowgirl',
            data: [
                {
                    x: '2024-04-30 12:00:00',
                    y: 1.3
                }, {
                    x: '2024-05-01 07:35:00',
                    y: 1.450
                }, {
                    x: '2024-05-01 12:30:00',
                    y: 1.437
                }, {
                    x: '2024-05-01 20:15:00',
                    y: 1.542
                }, {
                    x: '2024-05-02 08:10:00',
                    y: 1.615
                }, {
                    x: '2024-05-02 17:00:00',
                    y: 1.615
                }

            ],
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            yAxisID: 'y',
        },
        {
            label: 'Susan Tabs',
            data: [
                {
                    x: '2024-04-30 12:00:00',
                    y: 1.3
                }, {
                    x: '2024-05-01 07:35:00',
                    y: 1.470
                }, {
                    x: '2024-05-01 12:30:00',
                    y: 1.45
                }, {
                    x: '2024-05-01 20:15:00',
                    y: 1.487
                }, {
                    x: '2024-05-02 08:10:00',
                    y: 1.575
                }, {
                    x: '2024-05-02 17:00:00',
                    y: 1.575
                }
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

// export function App() {
//   return <Line options={options} data={data} />;
// }