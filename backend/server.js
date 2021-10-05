import express from 'express'
import dotenv from 'dotenv'
import connectDB from './db.js'
import colors from 'colors'
import userRoutes from './Routes/userRoutes.js'
import storyRoutes from './Routes/storyRoutes.js'
import { notFound, errorHandler } from './Middlewares/errorMiddleware.js'
import path from 'path'
import appRoot from'app-root-path';

var appDir = appRoot;

dotenv.config()
connectDB()
const app = express()

global.__basedir = appDir;

app.use(express.json({limit: '50mb'}))
app.use(express.urlencoded({ extended: false, limit: '50mb' }))

app.use('/users' , userRoutes)
app.use('/stories' , storyRoutes)

const __dirname = path.resolve()

app.use(express.static(path.join(__dirname, '/frontend/build')))

app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
)

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 4000
app.listen(PORT , () => console.log(`Server Running: ${PORT}`.yellow.bold.underline))