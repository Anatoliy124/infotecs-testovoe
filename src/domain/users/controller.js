const { error } = require('console');
const User = require('./model');

const getUsers = async (req, res) => {
  try {
    const users = await User.getUsers();
    res.render('users', { users });
  } catch (error) {
    res.status(500).send(error.message);
  }
};


const filterUsers = async (req, res) => {
  try {
    const { key, value } = req.body;
    const users = await User.filterUsers(key, value);
    res.render('users', { users });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const filterByName = async (req, res) => {
  try {
    const { order } = req.query || 'default';
    const users = await User.filterByName(order);
    res.render('users', { users });
  } catch {
    res.status(500).send(error.message);
  }
}
  const filterByAdress = async (req, res) => {
    try {
      const { filterAdress } = req.query || 'default';
      const users = await User.filterByAdress(filterAdress);
      res.render('users', { users });                                                      
    } catch {
      res.status(500).send(error.message);
    }
  }


  const filterByGender = async (req, res) => {
    try {
      const { filterGender } = req.query || 'default';
      const users = await User.filterByGender(filterGender);
      return res.render('users', { users });
    } catch {
      res.status(500).send(error.message);
    }
  } 


  const filterByAge = async (req, res) => {
    try {
      const { filterAge } = req.query;
      const users = await User.filterByAge(filterAge);
      return res.render('users', { users });
    } catch {
      res.status(500).send(error.message);
    }
  }
module.exports = { getUsers, filterUsers, filterByName, filterByAdress, filterByGender, filterByAge };
