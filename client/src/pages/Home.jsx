import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Home = () => {
    const [pattern,setPattern] = useState([])
    

    useEffect(()=> {
        const fetchPattern = async ()=>{
            try{
                const res = await axios.get("http://localhost:8800/patterns")
                setPattern(res.data);
            }catch(err){
                console.log(err)
            }
        }
        fetchPattern()
    },[])

    console.log(pattern)
    

    return (
        <div className = "home">
            <h1 className="title-home">Custom Fit Crochet & Knit Patterns</h1>
            <div className="patterns">
                {pattern.map((pattern) => (
                    <div key={pattern.idpatterns} className="pattern-home">
                        <img src={pattern.picture} alt="" />
                        <h2>{pattern.name}</h2>
                        <button className="button-choose-pattern">
                            <Link to={`/update/${pattern.idpatterns}`} style={{ color: "inherit", textDecoration: "none" }}>Get Custom Pattern</Link>
                        </button>

                    </div>
                ))}
            </div>
        </div>
    )
};

export default Home
