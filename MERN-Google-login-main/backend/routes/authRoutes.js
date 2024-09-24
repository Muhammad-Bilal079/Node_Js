import express from 'express'
const Router = express.Router();
import  {googleAuth}  from '../controllers/authController.js';

Router.get("/google", googleAuth);

// module.exports = Router;
export default Router