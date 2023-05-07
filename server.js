// server.js
import express from 'express';
import bodyParser from 'body-parser';
import minimist from 'minimist';
import { rps, rpsls } from './lib/rpsls.js';

// parse argv
const argv = minimist(process.argv.slice(2));
const port = argv.port ? argv.port : 5000;

const app = express();
// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));


// Check endpoint at /app/ that returns 200 OK
app.get('/app/', (req, res) => {
    res.status(200).send('200 OK');
  });

// Check endpoint at /app/rps/
app.get('/app/rps/', (req, res) => {
  const result = rps();
  res.status(200).json(result);
});

// Check endpoint at /app/rps/
app.get('/app/rpsls/', (req, res) => {
  const result = rpsls();
  res.status(200).json(result);
});

// API route for playing the RPS game
app.get('/app/rps/play/', (req, res) => {
  const playerChoice = req.body.shot || req.query.shot;
  const result = rps(playerChoice);
  res.status(200).json(result);
});

// API route for playing the RPSLS game
app.get('/app/rpsls/play/', (req, res) => {
  const playerChoice = req.body.shot || req.query.shot;
  const result = rpsls(playerChoice);
  res.status(200).json(result);
});

// API route for playing the RPS game
app.post('/app/rps/play/', (req, res) => {
  const playerChoice = req.body.shot || req.query.shot;
  const result = rps(playerChoice);
  res.status(200).json(result);
});

// API route for playing the RPSLS game
app.post('/app/rpsls/play/', (req, res) => {
  const playerChoice = req.body.shot || req.query.shot;
  const result = rpsls(playerChoice);
  res.status(200).json(result);
});

// API route for playing the RPS game using a URL parameter
app.get('/app/rps/play/:choice(rock|paper|scissors)/', (req, res) => {
  const playerChoice = req.params.choice;
  const result = rps(playerChoice);
  res.status(200).json(result);
});

// API route for playing the RPSLS game using a URL parameter
app.get('/app/rpsls/play/:choice(rock|paper|scissors|lizard|spock)/', (req, res) => {
  const playerChoice = req.params.choice;
  const result = rpsls(playerChoice);
  res.status(200).json(result);
});

// Catch-all middleware for undefined routes
app.use((req, res) => {
    res.status(404).send("404 NOT FOUND");
  });
  
// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });