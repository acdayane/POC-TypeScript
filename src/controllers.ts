import { Request, Response } from "express";

export async function newResident(req: Request, res: Response) {
    
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
