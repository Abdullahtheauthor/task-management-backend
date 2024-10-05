const express = require('express');
const { create_task, get_all_tasks } = require('../controllers/task_controller');
router = express.Router();


router.post("/create_task",create_task)
router.post("/getTasks" , get_all_tasks)
module.exports= router