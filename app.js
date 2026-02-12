
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

const usersRouter = require('./routers/users.router');
const adoptionsRouter = require('./routers/adoptions.router');

const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger/swagger.yaml');

app.use('/api/users', usersRouter);
app.use('/api/adoptions', adoptionsRouter);
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const PORT = process.env.PORT || 8080;

if (require.main === module) {
  mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/backend_final')
    .then(() => {
      app.listen(PORT, () => console.log("Server running on port " + PORT));
    });
}

module.exports = app;
