"use strict";

const Task = require("../../models/User");

const output = {
  home: (req, res) => {
    res.render("home/index");
  },
  toDoList: async (req, res) => {
    const task = new Task();
    const start = await task.loadTask();
    return res.json(start);
  },
};

const process = {
  createToDoList: async (req, res) => {
    const task = new Task(req.body);
    const response = await task.plusTask();
    return res.json(response);
  },
  deleteToDoList: async (req, res) => {
    const task = new Task(req.body);
    const response = await task.deleteTask();
    return res.json(response);
  },
  editToDoList: async (req, res) => {
    const task = new Task(req.body);
    const response = await task.editTask();
    return res.json(response);
  },
  checkToDoList: async (req, res) => {
    const task = new Task(req.body);
    const response = await task.checkTask();
    return res.json(response);
  },
};

module.exports = {
  output,
  process,
};
