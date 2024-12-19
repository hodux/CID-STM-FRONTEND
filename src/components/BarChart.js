import React, { useEffect, useRef } from 'react';
import * as Plot from '@observablehq/plot';

const BarChart = ({ data }) => {
    const chartRef = useRef(null);

    useEffect(() => {
        if (chartRef.current) {
            chartRef.current.innerHTML = '';
        }

        const chart = Plot.plot({
            height: 650,
            width: 2000,
            marks: [
                Plot.barY(data, { x: 'route_id', y: 'stop_sequence', fill: 'steelblue', title: d => `Bus: ${d.route_id}\nStops: ${d.stop_sequence}` }),
            ],
            x: { label: 'Route ID', tickRotate: -90, tickPadding: 5 }, 
            y: { label: 'Stop sequence' }, 
            style: { background: '#f9f9f9', fontSize: '12px' }, 
        });

        chartRef.current.appendChild(chart);

        return () => chart.remove();
    }, [data]);

    return <div ref={chartRef}></div>;
};

export default BarChart;
