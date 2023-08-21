import express from 'express'
const router = express.Router();

import {insertData} from '../Controllers/controllers.js'

router.post("/send",insertData);




export default router;