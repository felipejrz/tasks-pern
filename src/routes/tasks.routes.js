const { Router } = require("express");
const pool = require("../dataBase")

const router = Router();

router.get("/tasks", async(req, res) => {
    const result = await pool.query("SELECT NOW()")
    res.json(result.rows[0].now)
});

router.get("/tasks/10", (req, res) => {
  res.send("Regresando una tarea");
});

router.post("/tasks", (req, res) => {
  res.send("Creando una tarea");
});

router.delete("/tasks", (req, res) => {
  res.send("Eliminando una tarea");
});

router.put("/tasks", (req, res) => {
  res.send("Actualizando una tarea");
});

module.exports = router;
