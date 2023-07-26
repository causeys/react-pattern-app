import React from 'react'
import axios from 'axios'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

// FORM PAGE FOR USERS TO INPUT MEASUREMENTS & UPDATED db ENTRY
const Updates = () => {

    const [newBust, setNewBust] = useState(0)

    const navigate = useNavigate()
    const location = useLocation()

    const patternId = location.pathname.split("/")[2]

    const handleChange = (e) => {
        setNewBust(e.target.value) }
    

    const handleClick = async (e) => {
        e.preventDefault()
        
        try {
            await axios.put(`http://localhost:8800/patterns/${patternId}`, {bust: newBust})
            navigate(`/result/${patternId}`)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className="form">
            <h1>Enter Your Measurements:</h1>
            <p>Measure around the fullest part of your bust and enter that number <strong>in inches</strong> ;&#41;</p>
            <input type="number" placeholder="38" name="bust" onChange={handleChange}></input>
            <button onClick={handleClick}>Submit</button>
        </div>
    )
}

export default Updates
