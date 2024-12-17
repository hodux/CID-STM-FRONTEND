import React, {useEffect, useState} from "react";
import BarChart from "../components/BarChart";
import axios from "axios";
const MaxSequencesChart = () => {

    const baseUrl = "https://localhost:3001/api/trips/maxSequences";
    const [data, setData] = useState([]);
    useEffect( () => {
        const fetchData = async () => {
            try{
                await axios.get(baseUrl)
                    .then(res => {
                        setData(res.data)
                        console.log(res.data)
                    })
                    .catch(err => console.log(err));
            }catch (error){
                console.log(error)
            }
        }
        fetchData()
    }, [])
    data.map((trip) => {
        console.log(trip)
    })
    return (
        <div className=" h-screen w-screen self-center items-center p-5 flex">
            <BarChart data={data} />
        </div>

    )
}
export default MaxSequencesChart;