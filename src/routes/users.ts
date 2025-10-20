import { Router } from "express";
import { me, updateMe, deleteMe } from "../controllers/user.controller";
import { requireAuth } from "../middleware/auth";
const router = Router();

router.get("/me", requireAuth, me);
router.put("/me", requireAuth, updateMe);
router.delete("/me", requireAuth, deleteMe);

export default router;
