const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const userRoutes = require('./domain/users/routes');

const PORT = 5000;

const app = express();

app.set('view engine', 'hbs');
app.set('views', path.resolve(__dirname, 'views'));


app.use(bodyParser.urlencoded({ extended: true }));
app.use('/users/searchFirstName', userRoutes);
app.use('/users', userRoutes);
app.use('/users/filterByName', userRoutes);
app.use('/users/filterByAdress', userRoutes);
app.use('/users/filterByGender', userRoutes);
app.use('/users/filterByAge', userRoutes);

app.listen(PORT, () => console.log('Server started on port ' + PORT));
