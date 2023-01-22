import { Router } from "express";
import {newTask, tasksList, updateStatusTask, deleteTask} from "./controllers.js";

const router = Router();

router.post("/tasks", newTask);
router.get("/tasks", tasksList);
router.put("/tasks/:id", updateStatusTask);
router.delete("tasks/:id", deleteTask);

export default router;