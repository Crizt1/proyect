import { Router } from "express";
import { 
    getUsers,
    createUser,
    getUser,
    updateUser,
    deleteUser,
} from "../controllers/users.controllers.js";

const router = Router();

//router.get('/', (req, res)=> res.send("Hello world!"));

router.get("/users/:id", getUser);
router.delete("/users/:id", deleteUser);
router.put("/users/:id", updateUser);
router.post("/users", createUser);
router.get("/users", getUsers);
router.get("/", getUsers);

export default router;