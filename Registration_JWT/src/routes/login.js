import express from 'express'
import loginController from '../controllers/loginController.js';
const loginRoute = express.Router();

// yahan per express ki routing use ki hai 
loginRoute.post('/login',loginController)

export default loginRoute