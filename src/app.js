const express = require('express');
const app = express();
const port = 3000;

const mongoose = require('mongoose');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./docs/swagger-config.js');

mongoose.connect('mongodb://0.0.0.0:27017/timer');


app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(express.urlencoded());
app.use(express.json());

const userRoute = require(`./routes/userRoute`);
const timeRoute = require(`./routes/timeRoute`);

userRoute(app);
timeRoute(app);

app.listen(port, () => {
  console.log(`Exemple app listening on port ${port}`)
});