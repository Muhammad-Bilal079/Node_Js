import express from 'express'
import teacherController from '../controllers/teacherController.js';
import authMiddleware from '../middlewares/authMiddleware.js';
import jwt from 'jsonwebtoken'
const teacherRoute = express.Router();



// yahan per express ki routing use ki hai 
teacherRoute.post('/teacher/create', authMiddleware, teacherController)

export default teacherRoute