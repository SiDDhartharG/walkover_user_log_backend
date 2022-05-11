import express from 'express'

const routes = express.Router()

// route to api/user
routes.route('/signup').post()
routes.route('/login').post()

export default routes