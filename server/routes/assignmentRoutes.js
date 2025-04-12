import express from 'express';
import { assignmentCreate,getAssignmentsByCreator,getAllAssignments } from '../controllers/assignmentContoller.js';

const router = express.Router();

router.route('/post').post(assignmentCreate);
router.route('/getByEmail').post(getAssignmentsByCreator);
router.route('/getAll').post(getAllAssignments);

export default router;