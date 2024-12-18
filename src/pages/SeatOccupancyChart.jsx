import React, { useEffect, useState } from "react";
import BarChart from "../components/BarChart";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import * as Plot from "@observablehq/plot";
import SeatChart from "../components/SeatChart";

const SeatOccupancyChart = () => {
    const navigate = useNavigate();
    const baseUrl = `https://localhost:3001/api/seats`;
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState("");
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                let token = localStorage.getItem('token');
                if (token == null || token === "") {
                    navigate('/signin');
                } else {
                    setIsAuthenticated(true);
                }
                await axios.get(baseUrl, { headers: { "Authorization": `Bearer ${token}` } })
                    .then(res => {
                        setData(res.data)
                    })
                    .catch(err => console.log(err));
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [navigate, isAuthenticated]);

    return (
        <div className="h-screen p-6 bg-blue-400 flex flex-col items-center">
            <h1 className="text-3xl font-semibold mt-16 mb-5">Nombre de bus par sièges disponible</h1>
            <SeatChart data={data} />
        </div>
    );
};

export default SeatOccupancyChart;
