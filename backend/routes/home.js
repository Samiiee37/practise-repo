import { Router } from "express";
import getProtectedData from "../controllers/home.js";
const router = Router();

router.get('/', getProtectedData);

export default router