import { Router } from "express";
const router = Router();

router.get('/user',(req, res) => {
    return res.json({message : "All users"})
});

router.post('/user',(req, res) => {
    return res.json({message : "User added"})
});

export default router;