"use strict";

const AddTask = require("./UserStorage");

class Task {
  constructor(body) {
    this.body = body;
  }

  async plusTask() {
    const client = this.body;
    try {
      const response = await AddTask.save(client);
      return response;
    } catch (err) {
      return { success: false, msg: err };
    }
  }

  async loadTask() {
    try {
      const response = await AddTask.loadList();
      return response;
    } catch (err) {
      return { success: false, msg: err };
    }
  }

  async deleteTask() {
    const client = this.body;
    try {
      const response = await AddTask.deleteList(client);
      return response;
    } catch (err) {
      return { success: false, msg: err };
    }
  }

  async editTask() {
    const client = this.body;
    try {
      const response = await AddTask.editList(client);
      return response;
    } catch (err) {
      return { success: false, msg: err };
    }
  }

  async checkTask() {
    const client = this.body;
    try {
      const response = await AddTask.checkList(client);
      return response;
    } catch (err) {
      return { success: false, msg: err };
    }
  }
}

module.exports = Task;
