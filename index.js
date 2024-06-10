const express = require('express');
const app = express();
const PORT = 8080;

const {dbConnection} = require('./config/config');
const taskRoutes = require('./routes/tasks')


app.use(express.json()); //para que req.body no sea undefined

app.use('/', taskRoutes);

dbConnection();

app.listen(PORT, () => {
    console.log(`Server started on port http://localhost:${PORT}`)
})