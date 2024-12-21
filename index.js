const express = require('express')
const app = express()
const port = process.env.PORT || 8000;
const mongoose = require('mongoose');
require('dotenv').config()
const cors =  require('cors')

// middleware
app.use(express.json())
app.use(cors())

// routes
const blogRoutes = require('./src/routes/blog.routes')
app.use('/blogs', blogRoutes)

// mongoose configuration
async function main() {
    await mongoose.connect(process.env.DB_URL);
  
    app.get('/', (req, res) => {
        res.send('Meta Blog App Sever is runinng...!')
    })
}

main().then(() => console.log("Mongodb connected Successfyully!")).catch(err => console.log(err));




app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})