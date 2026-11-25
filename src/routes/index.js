import { Router } from "express";
import healthRoutes from "./health.routes.js";
import taskRoutes from "./task.routes.js";

const router = Router();

router.use(healthRoutes);

router.use(taskRoutes);

export default router;
