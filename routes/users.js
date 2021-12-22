import express from "express";
import {
  getUsers,
  createUser,
  getSingleUser,
  deleteUser,
  updateUser,
} from "../controllers/users.js";
const router = express.Router();

router.get("/users", getUsers); //get all users
router.post("/users", createUser); //post user
router.get("/user/:id", getSingleUser); //single user
router.delete("/user/:id", deleteUser); //delete
router.put("/user/:id", updateUser); //updating user
export default router;
