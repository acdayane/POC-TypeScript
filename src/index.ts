import express from "express";
import router from "./routes.js";

const app = express();
app.use(express.json());
app.use(router);

app.listen(5000, () => console.log("Server running on port 5000"));