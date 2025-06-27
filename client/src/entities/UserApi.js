const SERVER_USERS_ADRESS = "http://localhost:3000/api/users";

export class UserApi {
  static async getAll() {
    const response = await fetch(SERVER_USERS_ADRESS);
    const serverData = await response.json();
    return serverData;
  }

  static async getById(id) {
    const response = await fetch(SERVER_USERS_ADRESS + `/${id}`);
    const serverData = await response.json();
    return serverData;
  }

  static async create(newUserData) {
    const response = await fetch(SERVER_USERS_ADRESS, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUserData),
    });
    const serverData = await response.json();
    return serverData;
  }
  //   дописать если будет время
  static async updateByID(id) {
    const response = await this.getById();
    if (response === id) {
      console.log(`пользователь с таким именем уже существует`);
      return;
    }
    const serverData = await response.json();
    return serverData;
  }

  static async deleteById(id) {
    const response = await fetch(SERVER_USERS_ADRESS + `/${id}`, {
      method: "DELETE",
    });
    const serverData = await response.json();
    return serverData;
  }
}
