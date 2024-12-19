import React, {useEffect, useState} from "react";
import BarChartTrip from "../components/TripsChart";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import TripsChart from "../components/TripsChart";
const FullTripTimeChart = () => {
    const navigate = useNavigate();
    const baseUrl = "https://localhost:3001/api/trips/duration";
    const [data, setData] = useState([]);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [busFilter,setBusFilter]=useState("");
    const [durationMinimumFilter,setDurationMinimumFilter]=useState(0);
    useEffect( () => {
        const fetchData = async () => {
            try{
                let token = localStorage.getItem('token');
                if(token == null || token === ""){
                    navigate('/signin');
                }else{
                    setIsAuthenticated(true);
                }
                await axios.get(baseUrl,{ headers: {"Authorization" : `Bearer ${token}`} } )
                    .then(res => {
                        setData(res.data)
                    })
                    .catch(err => console.log(err));
            }catch (error){
                console.log(error)
            }
        }
        fetchData()
    }, [navigate, isAuthenticated])
    const filteredData = (!busFilter && durationMinimumFilter===0)? data: 
    data.filter((trip) => {
        const matchesBus = !busFilter || trip.routeId===busFilter; 
        const matchesDuration = durationMinimumFilter ===0 || trip.duration >= durationMinimumFilter;
        return matchesBus && matchesDuration; 
    });    


    return (
        <div className=" h-screen w-screen self-center items-center p-5 flex">
            <div className="mb-5">
                <input
                    type="text"
                    placeholder="Filtrer par autobus..."
                    value={busFilter}
                    onChange={e => setBusFilter(e.target.value)}
                    className="border p-2 rounded"
                />
            </div>

            <div className="mb-5">
                <input
                    type="number"
                    placeholder="Filtrer par temps..."
                    value={durationMinimumFilter}
                    onChange={e => setDurationMinimumFilter(e.target.value)}
                    className="border p-2 rounded"
                />
            </div>
            <TripsChart data={filteredData} />
        </div>

    )
}
export default FullTripTimeChart;