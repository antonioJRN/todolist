import React, { useState, useEffect } from "react";
import axios from "axios"
import moment from "moment";


import { Task, DivForm } from "./styles";
function AddTask() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isUpdated, setIsUpdated] = useState(false);
  const [updatedTask, setUpdatedTask] = useState("");

  useEffect(() => {
    const getAllTask = async () => {
      const response = await axios.get("http://localhost:3333/task");
      console.log(response);
      setTasks(response.data);
    };
    getAllTask();
  }, []);

  async function handleAddTasks(event) {
    event.preventDefault();

    if(isUpdated) {
      //console.log(updatedTask);
      const findItem = tasks.findIndex(taskFind => updatedTask._id === taskFind._id)
      const newTasksUpdate = tasks
      const newTask = {
        description,
        title,
        _id: updatedTask._id
      }
      newTasksUpdate[findItem] = newTask
      const response = await axios.patch(`http://localhost:3333/task/${updatedTask._id}`, newTask);
      //const newTasksUpdate = [...tasks, response.data];
      setDescription("")
      setTitle("")
      setIsUpdated(false)
      setTasks([...newTasksUpdate])
    }else {
      const taskAdd = {
        title,
        description,
      };
  
      const response = await axios.post("http://localhost:3333/task", taskAdd);
      const newTasks = [...tasks, response.data];
      setDescription("");
      setTitle("");
      setTasks(newTasks);
    }
    
  }

  async function handleDeleteTask(id) {
    //console.log(id);
    const deleteTask = tasks.filter((task) => id !== task._id);

    //console.log(deleteTask);
    setTasks(deleteTask);
    await axios.delete(`http://localhost:3333/task/${id}`);
  }
  async function handleUpdatedTask(task) {
  
    setIsUpdated(true);
    setUpdatedTask(task)
    setDescription(task.description);
    setTitle(task.description);
  }

  return (
    <DivForm>
      <h1>Quais são os planos para hoje?</h1>
      <div>
        <form className="todo-form" onSubmit={handleAddTasks}>
          <div class="title-div">
          <input
            class="title-input"
            autoComplete="off"
            type="text"
            value={title}
            name="text"
            onChange={(title) => setTitle(title.target.value)}
          />
          <label class="label-title">Título</label>
          </div>
          <div class="description-div">
            <input
             class="description-input"
              autoComplete="off"
              type="text"
              name="text"
              value={description}
              onChange={(description) => setDescription(description.target.value)}
            />
            <label class="label-description">Descrição</label>
          </div>
          {isUpdated ? (
            <div class="todo-button">
              <button class="submit" type="submit">
                Atualizar
              </button>
            </div>
            ) : (
            <div class="todo-button">
              <button class="submit" type="submit">
                Salvar
              </button>
            </div>
          )}
        </form>
        <Task>
          {tasks.map((task) => (
            <div class="container" key={String(task._id)}>
              <li class="title">{task.title}</li>
              <li class="description">{task.description}</li>
              <span>{console.log(task.createdAtFormat)}</span>
              <div class="buttons"> 
                <button class="button-update" onClick={() => handleUpdatedTask(task)}>Editar</button>
                <button class="button-delete" onClick={() => handleDeleteTask(task._id)}>Apagar</button>
              </div>
            </div>
          ))}
        </Task>
      </div>
    </DivForm>
  );
}

export default AddTask;
