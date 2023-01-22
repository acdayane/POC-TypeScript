import { Router } from "express";
import {newResident, tasksList, updateStatusTask, deleteTask} from "./controllers.js";

const router = Router();

router.post("/residents", newResident);
router.get("/tasks/:id", tasksList);
router.put("/tasks", updateStatusTask);
router.delete("tasks", deleteTask);

export default router;