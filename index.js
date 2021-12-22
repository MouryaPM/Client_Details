import express from "express";
import bodyparser from "body-parser";
import cors from "cors";
const app = express();
const PORT = 5000;
import userRoutes from "./routes/users.js";

app.use(bodyparser.json());
app.use(cors());
app.use("/", userRoutes);
app.get("/", (req, res) => res.send("Server"));
app.all("*", (req, res) => res.send("Route does not exists"));
app.listen(PORT, () => console.log(`server running on port ${PORT}`));
