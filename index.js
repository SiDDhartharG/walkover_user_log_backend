import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import userRoutes from './router/userRouter'
dotenv.config()
connectDB()

const app = express()
app.use(express.json())



app.get('/', (_, res) => {
    res.send('Hello World!')
})


app.use('/api/user', userRoutes)


const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})