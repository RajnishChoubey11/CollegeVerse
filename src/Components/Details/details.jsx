import React from "react";
import {useEffect,useState} from "react"
import './details.css';
import {useParams} from 'react-router-dom';

const Details =()=>{

    const {id,Category} = useParams();
    const[data,setData] = useState();

    useEffect(()=>{
        fetch(`https://college-back-end.onrender.com/${Category}/${id}`)
        .then((response)=>response.json())
        .then((data) => setData(data))
        .catch((error) => console.log('Error in datafetching',error));
    },[id,Category]);


    return(
        <div className="Details">
            <div className="college-rank">{data?.Category} : #{data?.Rank}</div>
            <div className="College-name">{data?.Name}</div>
            <div className="details-image"><img className='detail-image'src={data?.image} alt=''/></div>
            <div className="college-place">{data?.City},{data?.State}</div>
            <a className="college-link" href={`${data?.Website}`}target="_blank" rel="noopener noreferrer">Check out the college website </a>
            <div className="information">Info......</div>
        </div>
    )
}
export default Details;