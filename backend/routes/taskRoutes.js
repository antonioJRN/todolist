const router = require("express").Router();

const { request, response } = require("express");
const res = require("express/lib/response");
const { append } = require("express/lib/response");
const moment = require("moment")
const Task = require("../models/Task");

router.post("/", async (request, response) => {
  const { description, title } = request.body;

  if (!title && title === "") {
    return response.status(422).json({ error: "Titulo obrigatório" });
  }

  const task = {
    description,
    title,
  };

  try {
    const newTask = await Task.create(task);

    return response.status(201).json(newTask);
  } catch (error) {
    return response.status(500).json({ error: error });
  }
});

router.get("/", async (request, response) => {
  try {
    const tasks = await Task.find();
    const taskFormat = tasks.map(task => {
        const taskFormatDate = {
            ...task._doc,
            createdAtFormated: moment(task.createdAt).format("DD/MM/YYYY")
        }
        return taskFormatDate
    })
    return response.status(200).json(taskFormat);
  } catch (error) {
    return response.status(500).json({ error: error });
  }
});

//read
router.get("/:id", async (request, response) => {
  const id = request.params.id;

  try {
    const task = await Task.findOne({ _id: id });

    if (!task) {
      response.status(422).json({ message: "Tarefa nao encontrada!" });
      return;
    }
    response.status(200).json(task);
  } catch (error) {
    response.status(500).json({ error: error });
  }
});

router.patch("/:id", async (request, response) => {
  const id = request.params.id;

  const { title, description } = request.body;

  const task = {
    title,
    description,
  };

  try {
    const updatedTask = await Task.updateOne({ _id: id }, task);

    if (updatedTask.matchedCount === 0) {
      response.status(422).json({ message: "Tarefa não encontrada!" });
      return;
    }
    response.status(200).json(task);
  } catch {
    response.status(500).json({ error: error });
  }
});

router.delete("/:id", async (request, response) => {
  const id = request.params.id;
  console.log(id)
  const task = await Task.findOne({ _id: id });

  if (!task) {
    response.status(422).json({ message: "Tarefa não encontrada!" });
  }

  try {
    await Task.deleteOne({ _id: id });

    response.status(200).json({ message: "Tarefa removida!" });
  } catch (error) {
    response.status(500).json({ error: error });
  }
});
module.exports = router;
