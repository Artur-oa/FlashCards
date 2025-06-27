const { User } = require("../../db/models");

class UserServise {
  static async getAll() {
    return await User.findAll();
  }
  static async getById(id) {
    return await User.findByPk(id);
  }
  static async create(data) {
    return await User.create(data);
  }
  static async bulkCreate(data) {
    return await User.bulkCreate(data);
  }

  static async updateById(id, data) {
    const userForUpdate = await this.getById(id);
    if (!userForUpdate) return null;
    const { name, email, password, score } = data;
    if (name) {
      userForUpdate.name = name;
    }
    if (email) {
      userForUpdate.email = email;
    }
    if (password) {
      userForUpdate.password = password;
    }
    if (name) {
      userForUpdate.score = score;
    }
    await userForUpdate.save();
    return userForUpdate;
  }
  static async deleteById(id) {
    const userForDestroy = await this.getById(id);
    if (!userForDestroy) return null;

    return await userForDestroy.destroy();
  }

  static async addScore(userId, points) {
    console.log("addScore called", { userId, points });
    const user = await this.getById(userId);
    console.log("user found:", user ? user.toJSON() : null);
    if (!user) return null;
    user.score = (user.score || 0) + points;
    await user.save();
    console.log("user after save:", user.toJSON());
    return user;
  }
}
module.exports = UserServise;
