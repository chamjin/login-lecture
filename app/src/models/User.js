"use strict";

const UserStorage = require("./UserStorage");

class User {
  constructor(body) {
    this.body = body;
  }

  async login() {
    const client = this.body;
    try {
      const userInfo = await UserStorage.getUserInfo(client.id);

      if (userInfo) {
        if (userInfo.psword === client.psword) {
          return { success: true };
        } else {
          return { success: false, msg: "비밀번호가 틀렸습니다." };
        }
      } else {
        return {
          success: false,
          msg: "존재하지 않는 아이디입니다.",
        };
      }
    } catch (err) {
      return { success: false, msg: err };
    }
  }

  async register() {
    const client = this.body;
    try {
      const response = await UserStorage.save(client);
      return response;
    } catch (err) {
      return { success: false, msg: err };
    }
  }
}

module.exports = User;
