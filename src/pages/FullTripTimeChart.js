import React, {useEffect, useState} from "react";
import BarChartTrip from "../components/BarChartTrips";
import axios from "axios";
import {useNavigate} from "react-router-dom";
const FullTripTimeChart = () => {
    const navigate = useNavigate();
    const baseUrl = "https://localhost:3001/api/trips/duration";
    const [data, setData] = useState([]);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
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
    data.map((trip) => {
        console.log(trip)
    })
    return (
        <div className=" h-screen w-screen self-center items-center p-5 flex">
            <BarChartTrip data={data} />
        </div>

    )
}
export default FullTripTimeChart;