const task_model = require("../Schemas/task_model")

async function create_task (req , res) {
    try{
        const data = req.body;
        await task_model.create(data)
        res.status(201).json({message:"task created successfuly"})
    }
    catch(error){
        res.status(500).json({message:error})
    }
}

async function get_all_tasks(req,res){
    try{
        tasks = await task_model.find();
        res.status(200).json({tasks:tasks})
    }catch(error){
        res.status(500).json({message:error})
    }
}

module.exports = {
    create_task,
    get_all_tasks
}