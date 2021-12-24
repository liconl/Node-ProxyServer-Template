import express from "express"
import cors from "cors"
import rateLimit from 'express-rate-limit';
import errorHandler from './middleware/error.js'
import routes from "./routes/index.js"
import dotenv from "dotenv"

dotenv.config()


const PORT = process.env.PORT || 5000

const app = express()

// Rate limiting
const limiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 Mins
  max: 100,
})
app.use(limiter)
app.set('trust proxy', 1)

// Enable cors
app.use(cors())

// Set static folder
app.use(express.static('public'))

// Routes
app.use('/api', routes)

// Error handler middleware
app.use(errorHandler)

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))