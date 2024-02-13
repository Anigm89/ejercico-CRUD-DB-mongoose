const express = require('express');
const app = express();
const PORT = 8080;

const {dbConnection} = require('./config/config');
const routes = require('./routes');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', routes);

dbConnection();

app.listen(PORT, () => {
    console.log(`Server started on port http://localhost:${PORT}`)
})