import { Request, Response } from "express";
import { taskSchema } from "./models.js";
import { Task } from "./protocols.js";
import { insertTask, updateTask, excludeTask, getTasksList } from "./repositories.js";

export async function newTask(req: Request, res: Response) {
    const { responsable, description } = req.body as Task;
    
    const { error } = taskSchema.validate(req.body, { abortEarly: false });

    if (error) {
        const err = error.details.map((d) => d.message);
        return res.status(422).send(err);
    };

    try {
        await insertTask(responsable, description);
        res.sendStatus(201);
    } catch(err) {
        res.status(500).send(err);
    };
};

export async function getTasks(req: Request, res: Response) {

    try {
        let tasksList = await getTasksList();
        tasksList = tasksList.rows;

        const pendingTasks:Task[] = tasksList.filter(tasks => tasks.concluded === false);
        
        const sumPendings:number = pendingTasks.length;

        const message = `Existem ${sumPendings} tarefas pendentes`;
        
        res.send({message: message, tasks: tasksList}); 
    } catch(err) {
        res.status(500).send(err);
    };  
};

export async function updateStatusTask(req: Request, res: Response) {
    const { id } = req.params;

    try {
        await updateTask(id);
        res.sendStatus(200);
    } catch(err) {
        res.status(500).send(err);
    };
};

export async function deleteTask(req: Request, res: Response) {
    const { id } = req.params;

    try {
        await excludeTask(id);
        res.sendStatus(200);
    } catch(err) {
        res.status(500).send(err);
    };
};
