const { faker } = require('@faker-js/faker');

class UserData {

  randomUserEmail() {
    return faker.internet.email();
  }

  randomUserPassword() {
    return faker.internet.password();
  }

  randomUserName() {
    return faker.internet.userName();
  }
}

const users = {
  sus: { email: 'ulisoa11@gmail.com', password: 'ClaroMusica1' },
  reg: { email: 'mx20240801@gmail.com', password: 'ClaroMusica1' }
};

// Exporta la clase y el objeto
module.exports = {
  UserData,
  users
};