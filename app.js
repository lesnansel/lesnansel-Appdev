const express = require('express');
const app = express();
const indexRouter = require('./routes/index');

// set the view engine to ejs
app.set('view engine', 'ejs');

// use router for all routes
app.use('/', indexRouter);

// to start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
