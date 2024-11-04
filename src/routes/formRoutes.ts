import { Router } from "express";
import {
  getForms,
  createForm,
  updateForm,
  deleteForm,
} from "../controllers/formController";
import authMiddleware from "../middleware/authMiddleware";

const router = Router();

router.use(authMiddleware);

router.get("/", getForms);
router.post("/", createForm);
router.put("/:id", updateForm);
router.delete("/:id", deleteForm);

export default router;
