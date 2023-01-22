import { connection } from "./database.js";

export function insertTask(responsable:string, task:string) {
    return connection.query(`
        INSERT INTO tasks (responsable, description) VALUES ($1, $2);`,
        [responsable, task]
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