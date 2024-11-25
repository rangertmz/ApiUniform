import { Router } from 'express';
import { getPrimary, createPrimary, getLastPrimary, getAllUniforms } from '../controllers/Primary';
import { getSecondary, createSecondary, getLastSecondary } from '../controllers/Secondary';
import { getPreparatory, createPreparatory, getLastPreparatory } from '../controllers/Preparatory';
import { getSports, createSports, getLastSports } from '../controllers/Sports';
import { getTeachers, createTeachers, getLastTeachers } from '../controllers/Teachers';
import { getUniversity, createUniversity, getLastUniversity } from '../controllers/University';
import {  verifyLogin, updatePassword, logout, registerUser } from '../controllers/Login';
import { validateAllData } from '../Middleware/ValidateData';

const router = Router();

router.get('/Uniforms', getAllUniforms);

router.get('/Primary', getPrimary);
router.post('/Primary', validateAllData, createPrimary);
router.get('/Primary/Last', getLastPrimary);

router.get('/Secondary', getSecondary);
router.post('/Secondary', validateAllData, createSecondary);
router.get('/Secondary/Last', getLastSecondary);

router.get('/Preparatory', getPreparatory);
router.post('/Preparatory', validateAllData, createPreparatory);
router.get('/Preparatory/Last', getLastPreparatory);

router.get('/Sports', getSports);
router.post('/Sports', validateAllData, createSports);
router.get('/Sports/Last', getLastSports);

router.get('/Teachers', getTeachers);
router.post('/Teachers', validateAllData, createTeachers);
router.get('/Teachers/Last', getLastTeachers);

router.get('/University', getUniversity);
router.post('/University', validateAllData, createUniversity);
router.get('/University/Last', getLastUniversity);

router.put('/Login', updatePassword);
router.post('/Login', verifyLogin);
router.post('/Logout', logout);
router.post('/Register', registerUser);



export default router;