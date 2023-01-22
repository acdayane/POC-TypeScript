import { connection } from "./database.js";

export function insertTask(responsable:string, task:string) {
    return connection.query(`
        INSERT INTO tasks (responsable, description) VALUES ($1, $2);`,
        [responsable, task]
    );
};