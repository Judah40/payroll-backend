import express from 'express';

const router = express.Router();

//CREATE NEW PAYROLL
router.post('/create-payroll');

//GET ALL PAYROLL DETAIL
router.get('/');

//GET SINGLE PAYROLL DETAIL
router.get('/:id');
