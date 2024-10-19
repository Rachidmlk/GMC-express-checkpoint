import express from 'express'
const app = express()
const PORT = process.env.PORT || 3000
app.use((req, res, next)=> {
    
const time = new Date()
const day = time.getDay()
const hour = time.getHours()
console.log(hour);
(day > 4 || (hour < 9 || hour > 17))? res.status(406).send('<h1>Only works on weekdays between 9am and 17pm</h1>'): next()
})
app.use(express.static('public'))
app.listen(PORT)