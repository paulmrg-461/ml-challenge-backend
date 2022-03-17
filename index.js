const express = require('express');
const articles = require('./src/routes/articles');
require('dotenv').config();

const app = express();
const port = process.env.PORT;

// Use articles route from routes.
app.use('/articles', articles );

app.listen(port, () => {
  console.log(`Server running in port: ${port}.`);
})
