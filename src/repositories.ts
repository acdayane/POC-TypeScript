import { connection } from "./database.js";
import {QueryResult} from "pg";
import { Task } from "./protocols.js";

export function insertTask(responsable: string, description: string) {
    return connection.query(`
        INSERT INTO tasks (responsable, description) VALUES ($1, $2);`,
        [responsable, description]
    );
};

export function getTasksList(): Promise<QueryResult<Task[]>> {
    return connection.query(`
        SELECT id, responsable, description, concluded FROM tasks ORDER BY concluded, "createdAt";`
    );
};

export function updateTask(id: string) {
    return connection.query(`
        UPDATE tasks SET concluded = true WHERE id = $1;`,
        [id]
    );
};

export function excludeTask(id: string) {
    return connection.query(`
        DELETE FROM tasks WHERE id = $1`,
        [id]
    );
};