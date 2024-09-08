const { errorMonitor } = require('events');

class User {
  constructor({ firstName, maidenName, lastName, age, gender, address: { city, address } }) {
    this.firstName = firstName;
    this.maidenName = maidenName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
    this.city = city;
    this.address = address;
  }


  static async getUsers() {
    try {
      const fetch = (await import('node-fetch')).default;
      const response = await fetch('https://dummyjson.com/users');
      const data = await response.json();
      return data.users.map(user => new User(user));
    } catch (error) {
      console.error('Ошибка при получении данных:', error);
      throw new Error('Ошибка сервера');
    }
  }


  static async filterUsers(key, value) {
    try {
      const fetch = (await import('node-fetch')).default;
      const response = await fetch(`https://dummyjson.com/users/filter?key=${key}&value=${value}`);
      const data = await response.json();
      return data.users.map(user => new User(user));
    } catch (error) {
      console.error('Ошибка при фильтрации данных:', error);
      throw new Error('Ошибка сервера');
    }
  }


  static async filterByName(order = 'default') {
    try {
      const users = await this.getUsers();
      users.sort((a, b) => {
        const fullNameA = `${a.lastName} ${a.firstName} ${a.maidenName}`.toLowerCase();
        const fullNameB = `${b.lastName} ${b.firstName} ${b.maidenName}`.toLowerCase();
        if (order == 'default') {
          return users;
        } else if (order == 'Ascending') {
          return fullNameA.localeCompare(fullNameB);
        } else {
          return fullNameB.localeCompare(fullNameA);
        }
        });
      return users;
    } catch (error) {
      console.error('Ошибка при сортировке данных:', error);
      throw new Error('Ошибка сервера');
    }
  }


  static async filterByAdress(filterAdress = 'default') {
    try {
      const users = await this.getUsers();
      users.sort((a, b) => {
        const fullAdressA = `${a.city}`.toLocaleLowerCase();
        const fullAdressB = `${b.city}`.toLocaleLowerCase();
        if (filterAdress == 'default') {
          return users;
        } else if (filterAdress == 'ascending') {
          return fullAdressA.localeCompare(fullAdressB)
        } else {
          return fullAdressB.localeCompare(fullAdressA)
        }
      });
      return users;
    } catch (error) {
      console.log('ошибка при сортировке данных:', error);
      throw new Error('Ошибка сервера');
    }
  }
  static async filterByGender(filterGender='default') {
    try {
      const users = await this.getUsers();
      users.sort((a, b) => {
        const filterGenderA = `${a.gender}`.toLocaleLowerCase();
        const filterGenderB = `${b.gender}`.toLocaleLowerCase();
        if (filterGender == 'default') {
          return users;
        } else if (filterGender == 'ascending') {
          return filterGenderA.localeCompare(filterGenderB);
        } else {
          return filterGenderB.localeCompare(filterGenderA);
        }
      });
      return users;
    } catch (error) {
      console.log('ошибка при сортировке данных:', error);
      throw new Error('Ошибка сервера');
    }
  }


  static async filterByAge (filterAge='default') {
    try {
      const users = await this.getUsers();
      users.sort((a,b) => {
        const filterGenderA = `${a.age}`.toLocaleLowerCase();
        const filterGenderB = `${b.age}`.toLocaleLowerCase();
        if (filterAge='default') {
          return users;
        } else if (filterAge='ascending') {
          return filterGenderA.localeCompare(filterGenderB);
        } else {
          return filterGenderB.localeCompare(filterGenderA);
        }
      });
    } catch (error) {
      console.log('ошибка при сортировке данных:', error);
      throw new Error('Ошибка сервера');
    }
  }
}
module.exports = User;

