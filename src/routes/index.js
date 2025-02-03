import express from 'express';
import UserRoute from './AdminRoutes/userRoute/userRoute.js';

const router = express.Router();


//ROUTES
router.use('/auth', UserRoute);

export default router;
