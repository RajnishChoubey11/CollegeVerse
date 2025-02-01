import React from 'react';
import './style.css';
import {useEffect,useState} from "react";
import {NavLink} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';


const Engineering =()=>{

    const[data,setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredData, setFilteredData] = useState([]);

    useEffect(()=>{
        fetch('https://college-back-end.onrender.com/engineering')
        .then(response=>response.json())
        .then((data) => {
            setData(data);
            setFilteredData(data);
        });
    },[]);

    const handleSearch = (event) => {
        const value = event.target.value.toLowerCase();
        setSearchTerm(value);
        setFilteredData(
            data.filter((item) => {
                const name = typeof item.Name === 'string' ? item.Name.toLowerCase() : '';
                const city = typeof item.City === 'string' ? item.City.toLowerCase() : '';
                const state = typeof item.State === 'string' ? item.State.toLowerCase() : '';
                return (
                    name.includes(value) ||
                    city.includes(value) ||
                    state.includes(value)
                );
            })
        );
    };    

    return(
        <div className='Content'>
            <div className="search"><input id='search' type="text" placeholder='search your college' onChange={handleSearch} value={searchTerm} /><FontAwesomeIcon id='btn1' icon={faMagnifyingGlass} style={{color: "#11009e",}} /></div>
            <div className="heading">Engineering</div>
            <div id="bigBox">
               {filteredData.length>0 ? filteredData.map(item=>(
                <NavLink to ={`/details/${item.Category}/${item._id}`} className='box' key={item._id}>
                    <div className='image-section'><img src={item.image}alt=''/></div>
                    <div className='details-section'>
                        <div id='rank'>Rank : {item.Rank}</div>
                        <div id='name'>Name : {item.Name}</div>
                        <div id='city'>City : {item.City}</div>
                        <div id='state'>State : {item.State}</div>
                    </div>
                </NavLink>
               )):<h1>No Result Found</h1>
               }
                
                
            </div>


        </div>
    )
}

export default Engineering;