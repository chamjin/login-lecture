"use strict";

const db = require("../config/db");

class AddTask {
  static async loadList() {
    return new Promise((resolve, reject) => {
      const query = "SELECT * FROM tdListKj";
      db.query(query, (err, result) => {
        if (err) reject(`${err}`);
        resolve(result);
      });
    });
  }

  static async save(client) {
    return new Promise((resolve, reject) => {
      const query = "INSERT INTO tdListKj(description) VALUES(?)";
      db.query(query, [client.taskInput], (err) => {
        if (err) reject(`${err}`);
        resolve({ success: true });
      });
    });
  }

  static async editList(client) {
    return new Promise((resolve, reject) => {
      const query = "UPDATE tdListKj SET description = (?) WHERE id = (?)";
      db.query(query, [client.taskInput, client.id], (err) => {
        if (err) reject(`${err}`);
        resolve({ success: true });
      });
    });
  }

  static async deleteList(client) {
    return new Promise((resolve, reject) => {
      const query = "DELETE FROM tdListKj WHERE id = (?);";
      db.query(query, [client.id], (err) => {
        if (err) reject(`${err}`);
        resolve({ success: true });
      });
    });
  }

  static async checkList(client) {
    return new Promise((resolve, reject) => {
      const query =
        "UPDATE `tdListKj` SET `is_check` = CASE WHEN `is_check` = 0 THEN 1 ELSE 0 END WHERE `id` = (?)";
      db.query(query, [client.id], (err) => {
        if (err) reject(`${err}`);
        resolve({ success: true });
      });
    });
  }
}

module.exports = AddTask;
