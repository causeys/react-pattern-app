// PAGE THAT DISPLAYS CUSTOM PATTERN RESULT

import React from 'react'
import axios from 'axios'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'


const Result = () => {
    const location = useLocation()
    const navigate = useNavigate()
    
    const patternId = location.pathname.split("/")[2]

    const [result, setResult] = useState([])

    useEffect(()=> {
        const getResults = async ()=>{
            try{
                const res = await axios.get(`http://localhost:8800/patterns/${patternId}`)
                setResult(res.data)
            }catch(err){
                console.log(err)
            }
        }
        getResults()
    },[])

    const [newBust, setNewBust] = useState(0)
    const [newStitches, setNewStitches] = useState()

    const handleChange = (e) => {
        setNewBust(e.target.value)
     }

    const handleClick = async (e) => {
        e.preventDefault()

        try{
            await axios.put(`http://localhost:8800/patterns/${patternId}`, {bust: newBust})
            
            setResult(result.map((val) => {
                return val.idpatterns == patternId ? {idpatterns: val.idpatterns, name: val.name, stitches_gauge: val.stitches_gauge, bust: newBust, stitches: newStitches} : [val, val]
            }))
        } catch (err) {
            console.log(err)
        }
    }

    console.log(result)


    return (
        <div className="results">
            {result.map((result) => (
                <div key={result.idpatterns} className="result">
                    <h1 className="title-result">{result.name}</h1>
                    <div className = "form-resubmit">
                        <p>*Pattern for <b>{result.bust}</b> inch bust</p>
                        <p>Change bust measurement:</p>
                        <input type="number" placeholder="38" name="bust" onChange={handleChange}></input>
                        <button onClick={handleClick}>Submit</button>
                    </div>
                    <div className = "materials">
                        <h2>Materials</h2>
                        <ul>
                            <li>3 mm Crochet Hook</li>
                            <li>Sport/DK Weight Yarn</li>
                            <li>Stitch Markers</li>
                            <li>Tapestry Needle</li>
                        </ul>
                    </div>
                    <div div className = "abbrev">
                        <h2>Abbreviations</h2>
                        <ul>
                            <li>blsc = Back Loop Single Crochet</li>
                            <li>ch = Chain</li>
                        </ul>
                    </div>
                    <div className = "gauge">
                        <h2>Gauge:</h2>
                        <p>Crochet a 4x4 inch swatch using back</p>
                        <p>loop single crochet. Wash and block.</p>
                        <p> Swatch should measure at a gauge of </p>
                        <p>{result.stitches_gauge} stitches per inch.</p>
                    </div>
                    <img src={result.picture} alt="" />
                    <div className = "steps">
                        <h2>Steps:</h2>
                        <p>Chain 30 stitches</p>
                        <p><b>Row 1:</b> BLSC into every stitch</p>
                        <p><b>Row 2:</b> BLSC into every stitch and increase 1 stitch</p>
                        <p><b>Row 3 - Row {Math.floor(result.stitches/4)}:</b> Repeat row 2</p>
                        <p><b>Row {Math.floor(result.stitches / 4) + 1} - Row {Math.floor(result.stitches / 2)} </b> BLSC into every stitch and decrease 1 stitch</p>
                        <p><b>Row {Math.floor(result.stitches / 2) + 1} - Row {Math.floor(result.stitches)}:</b> BLSC into every stitch</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Result
