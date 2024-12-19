import React, { useEffect, useRef } from 'react';
import * as Plot from '@observablehq/plot';

const TripsChart = ({ data }) => {
    const chartRef2 = useRef(null);

    useEffect(() => {
        if (chartRef2.current) {
            chartRef2.current.innerHTML = '';
        }

       
        const chart = Plot.plot({
            height:1000,
            width: 2200,
            marks: [
                Plot.barY(data, { x: 'routeId', y: 'duration', fill: 'steelblue',title: d => `RouteId: ${d.routeId}\nduration: ${d.duration} minutes` }),
            ],
            x: { label: 'routeID',tickRotate: -90, tickPadding:5 } , 
            y: { label: 'duration',domain: [0, Math.max(...data.map(d => d.duration))],grid: true}, 
            style: { background: '#f9f9f9', fontSize: '12px',  },
        });

        chartRef2.current.appendChild(chart);

        return () => chart.remove();
    }, [data]);

    return <div ref={chartRef2}></div>;
};

export default TripsChart;
