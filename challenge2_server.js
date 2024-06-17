const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const app = express();
const port = 3002;

app.use(cors());

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Set up SQLite database
const db = new sqlite3.Database(':memory:');

// Create users table and insert sample data
db.serialize(() => {
    db.run("CREATE TABLE users (id INTEGER PRIMARY KEY, username TEXT, password TEXT)");
    const stmt = db.prepare("INSERT INTO users (username, password) VALUES (?, ?)");
    stmt.run("user1", "password1");
    stmt.run("user2", "password2");
    stmt.run("user3", "password3");
    stmt.finalize();
});

// Serve static files
app.use(express.static(path.join(__dirname, 'public/challenge2')));

// Handle login POST request
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // SQL query to check if the user exists with the provided username and password
    const query = `SELECT * FROM users WHERE username = '${username}' AND password = '${password}'`;

    db.get(query, (err, row) => {
        if (err) {
            console.error(err.message);
            res.status(500).send("Server Error");
            return;
        }
        if (row) {
            res.send("Login successful");
        } else {
            res.send("Invalid username or password");
        }
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Challenge 2 server running at http://localhost:${port}`);
});
