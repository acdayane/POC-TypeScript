import { Request, Response } from "express";
import { taskSchema } from "./models.js";
import { insertTask } from "./repositories.js";

export async function newTask(req: Request, res: Response) {
    const responsable:string = req.body.responsable;
    const task:string = req.body.description;
    
    const { error } = taskSchema.validate(req.body, { abortEarly: false });

    if (error) {
        const err = error.details.map((d) => d.message);
        return res.status(422).send(err);
    };

    try {
        await insertTask(responsable, task);
        res.sendStatus(201);
    } catch(err) {
        res.status(500).send(err);
    }
};

export async function tasksList(req: Request, res: Response) {
    const id = req.params;

    let pendingTasks;
    let sumPendings;
  
    res.send(`Você tem ${sumPendings} tarefas pendentes. São elas: ${pendingTasks}`)    
};

export async function updateStatusTask(req: Request, res: Response) {
    
};

export async function deleteTask(req: Request, res: Response) {
    
};
