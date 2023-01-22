import { Router } from "express";
import {newTask, getTasks, updateStatusTask, deleteTask} from "./controllers.js";

const router = Router();

router.post("/tasks", newTask);
router.get("/tasks", getTasks);
router.patch("/tasks/:id", updateStatusTask);
router.delete("/tasks/:id", deleteTask);

export default router;