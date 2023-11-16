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

router.get("/", getUsers);
router.get("/users", getUsers);
router.post("/users", createUser);
router.put("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);

router.get("/users/:id", getUser);

export default router;