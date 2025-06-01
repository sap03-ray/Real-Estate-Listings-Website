import express from 'express'
import {  deleteUser, getAllUser, getSingleUser, updateUser } from '../controls/userController.js';




const router =express.Router();
import { verifyAdmin, verifyUser } from '../utils/verifyToken.js';



router.put('/:id',verifyUser,updateUser);
//create delete user
router.delete('/:id',verifyUser,deleteUser);
//create get single user
router.get('/:id',verifyUser,getSingleUser);
//get all user
router.get('/',verifyAdmin,getAllUser);
export default router;
