const express = require('express');
const router = express.Router();
const path = require('path');


const app = express();
const port = process.env.PORT || 3000;

// Routes
app.get('/josh', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });
  
  // Start server
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });

  app.use(express.json());
// route setup
  app.use('/Josh', usersRouter);