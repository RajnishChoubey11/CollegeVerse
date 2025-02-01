import React from 'react'
import './footer.css'

const Footer =()=>{
    return(
        <div className='footer'>
            <div className='about'><h1>About</h1>
                <div className='about-content'><h2>Title:</h2> CollegeVerse - A MERN Stack-Based Platform for Exploring Colleges</div>
                <div className='about-content'><h2>Introduction:</h2> CollegeVerse is a web-based platform designed to help students explore and compare colleges across India. Developed using the MERN (MongoDB, Express.js, React.js, Node.js) stack, this website provides comprehensive information about various colleges, including rankings, courses, admission criteria, and infrastructure. The data used in the website is sourced from Google, Wikipedia, and NIRF (National Institutional Ranking Framework), ensuring authenticity and up-to-date information.</div>
                <ul className='about-content'><h2>Technology Stack</h2>
                    <li>MongoDB: Used for storing college details, user preferences, and reviews.</li>
                    <li>Express.js: Handles the backend logic and API routing.</li>
                    <li>React.js: Provides a dynamic and user-friendly front-end experience.</li>
                    <li>Node.js: Facilitates server-side operations and API integrations.</li>
                </ul>
                <ul className='about-content'><h2>Data Source</h2>
                    <li>Google: Used for real-time information updates, maps, and other relevant details.</li>
                    <li>Wikipedia: Provides historical and general information about colleges.</li>
                    <li>NIRF Data: Offers official rankings and accreditation details for colleges.</li>
                </ul>
            </div>
        </div>
    )
}
export default Footer;