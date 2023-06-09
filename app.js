const express = require('express')
const morgan = require('morgan')
const createError = require('http-errors')
const cors = require('cors')
require('dotenv').config()

const { verifyAccessToken } = require('./Helpers/jwt_helper')
const AuthRoute = require('./routes/Auth.route')
const DashboardRoute = require('./routes/Dashboard.route')

const app = express()
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.get('/', verifyAccessToken, async(req, res, next) => {
    res.send('Hello from Express')
})

app.use('/auth', AuthRoute)
app.use('/dashboard', DashboardRoute)

app.use(async(req, res, next) => {
    next(createError.NotFound('This route does not exist'))
})

app.use((err, req, res, next) => {
    res.status(err.status || 500)
    res.send( {
        error: {
            status: err.status || 500,
            message: err.message
        }
    })
})

const PORT = process.env.PORT || 3000

app.listen(PORT, ()=> {
    console.log(`Server running on port ${PORT}`)
})