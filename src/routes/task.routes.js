import { Router } from "express";

const router = Router();

router.param("id", (req, res, next, id) => {
  console.log("Received Task ID: ", id);

  if (!/^\d+$/.test(id)) {
    return res.status(400).json({
      success: false,
      message: "Invalid task ID",
    });
  }

  req.taskId = Number(id);

  next();
});

router.get("/tasks", (req, res) => {
  res.status(200).json({ message: "Success", query: req.query });
});

router.post("/tasks", (req, res) => {
  res.status(201).json({
    message: "Task created successfully",
    task: req.body,
  });
});

router.get("/tasks/:id", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Task ID validated successfully",
    taskId: req.taskId,
  });
});

router.patch("/tasks/:id", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Task updated successfully",
    taskId: req.taskId,
  });
});

router.delete("/tasks/:id", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Task deleted successfully",
    taskId: req.taskId,
  });
});

export default router;
