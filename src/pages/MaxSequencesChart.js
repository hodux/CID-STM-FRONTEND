import React, { useEffect, useState } from "react";
import BarChart from "../components/BarChart";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const MaxSequencesChart = () => {
    const navigate = useNavigate();
    const baseUrl = "https://localhost:3001/api/trips/maxSequences";
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

    const filteredData = data.filter(trip => trip.route_id.includes(filter));

    return (
        <div className="h-screen p-5 bg-blue-400 flex flex-col items-center">
            <h1 className="text-3xl font-semibold mt-16 mb-5">Nombre d'arrêts par autobus</h1>
            <div className="mb-5">
                <input
                    type="text"
                    placeholder="Filtrer par autobus..."
                    value={filter}
                    onChange={e => setFilter(e.target.value)}
                    className="border p-2 rounded"
                />
            </div>
            <BarChart data={filteredData} />
        </div>
    );
};

export default MaxSequencesChart;
