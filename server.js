const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(bodyParser.json());
app.use(cors());

const problems = [
    {
        id: 1,
        title: 'Simple Login',
        description: '表示されるWebページで "admin" としてログインしてください。',
        points: 100,
        flag: 'FLAG{example_flag_1}',
        url: 'http://localhost:3001/index.html'
    },
    {
        id: 2, 
        title: 'Simple Quest Login',
        description: '表示されるWebページで "admin" としてログインしてください。今度のパスワードは簡単なものではありません。',
        points: 150,
        flag: 'FLAG{example_flag_2}',
        url: 'http://localhost:3002/index.html'
    }
];

app.get('/api/problems', (req, res) => {
    res.json(problems);
});

app.post('/api/problems', (req, res) => {
    const { problemId, answer } = req.body;
    const problem = problems.find(p => p.id === problemId);

    if(problem && answer === problem.flag) {
        res.json({ correct: true });
    }
    else {
        res.json({ correct: false });
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});