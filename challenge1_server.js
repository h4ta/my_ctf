const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors());

app.use(express.static(path.join(__dirname, 'public/challenge1')));

app.listen(port, () => {
  console.log(`Challenge 1 server is running on http://localhost:${port}`);
});
