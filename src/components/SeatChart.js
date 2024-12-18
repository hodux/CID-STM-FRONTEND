import React, { useEffect, useRef } from "react";
import * as Plot from "@observablehq/plot";

// Mathieu - Observable plot component specifically tailored for SeatOccupancyChart.jsx
const SeatChart = ({ data }) => {
    const chartRef = useRef(null);

    useEffect(() => {
        const chart = Plot.plot({
            width: 800,
            height: 500,
            marks: [
                Plot.barY(data, {
                    x: "vehicle_occupancy_status",
                    y: "count",
                    fill: "lavender",
                }),
                Plot.text(data, {
                    x: "vehicle_occupancy_status",
                    y: "count",
                    text: (d) => d.count,
                    dy: -10,
                    fill: "black",
                    fontSize: 12,
                }),
            ],
            x: {
                label: "Occupancy Status",
            },
            y: {
                label: "Count",
            },
            style: {
                background: "transparent",
                color: "black",
            },
        });

        if (chartRef.current) {
            chartRef.current.innerHTML = "";
            chartRef.current.appendChild(chart);
        }

        return () => chart.remove();
    }, [data]);

    return <div ref={chartRef}></div>;
};

export default SeatChart;
