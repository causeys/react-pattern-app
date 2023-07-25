import express from "express"
import mysql from "mysql"
import cors from "cors"
import dotenv from "dotenv"

dotenv.config();

const app = express()

const db = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
})

app.use(express.json())
app.use(cors())

// GET method for retrieving all patterns from db
app.get("/patterns", (req,res)=>{
    const q = "SELECT * FROM patterns"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

// GET method for retrieving specific pattern from db
app.get("/patterns/:idpatterns", (req, res) => {
    const idpatterns = req.params.idpatterns
    const q = "SELECT * FROM patterns WHERE idpatterns = ?"

    db.query(q, (idpatterns), (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})

// PUT method to update db entry with user's input measurements
app.put("/patterns/:idpatterns", (req, res) => {
    const idpatterns = req.params.idpatterns
    const bust = req.body.bust

    // set const variables for db entry variables here
    const q = "UPDATE patterns SET bust = ? WHERE idpatterns = ?"

    db.query(q, [bust,idpatterns], (err, data) => {
        if (err) return res.json(err)
        // This has been changed from   return res.json(data)
        return res.json(data)
    })
})

app.listen(8800, ()=>{
    console.log("Connected to backend!")
})
