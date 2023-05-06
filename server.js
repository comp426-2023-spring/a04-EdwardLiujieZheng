// server.js
import express from 'express';
import bodyParser from 'body-parser';
import minimist from 'minimist';
import { rps, rpsls } from './lib/rpsls.js';

// parse argv
const argv = minimist(process.argv.slice(2));
const port = argv.port ? argv.port : 5000;
console.log(port)

const app = express();

// Middleware
app.use(bodyParser.json());

// Check endpoint at /app/ that returns 200 OK
app.get('/app/', (req, res) => {
    res.status(200).json({ message: '200 OK' });
  });

// Catch-all middleware for undefined routes
app.use((req, res) => {
    res.status(404).json({message: "404 NOT FOUND"});
  });
  
// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });