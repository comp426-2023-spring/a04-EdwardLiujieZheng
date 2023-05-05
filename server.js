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