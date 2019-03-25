import http from 'http';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import constants from './config/constant';
import config from './config.json';
import './config/database';
import chalk from 'chalk';

let app = express();
app.server = http.createServer(app);

// logger
app.use(morgan('dev'));
// 3rd party middleware
app.use(cors({
	exposedHeaders: config.corsHeaders
}));

app.use(bodyParser.json({
	limit : config.bodyLimit
}));

if (!module.parent) {
	app.listen(constants.PORT, err => {
	  if (err) {
		console.log(chalk.red('Cannot run!'));
	  } else {
		console.log(
		  chalk.green.bold(
			`
		  Yep this is working 🍺
		  App listen on port: ${constants.PORT} 🍕
		  Env: development 🦄
		`,
		  ),
		);
	  }
	});
  }


export default app;
