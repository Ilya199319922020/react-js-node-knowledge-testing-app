import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import router from './routes/router.js';
import bodyParser from 'body-parser';

mongoose
	.connect('mongodb+srv://Ilya:cucha098@cluster0.2dvnw.mongodb.net/test?retryWrites=true&w=majority')
	.then(() => console.log('DB ок!'))
	.catch((err) => { console.log('Error DB:', err) })

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const corsOptions = {
	origin: 'http://localhost:3000',
	credentials: true,
	optionSuccessStatus: 200
}
app.use(cors(corsOptions));

app.use('/api', function (req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization,  Set-Cookie',);
	res.setHeader('Access-Control-Allow-Credentials', true);
	next();
});

app.use('/api', router);

// Пользовательская страница 404
app.use(function (req, res, next) {
	res.status(404).send('Sorry !');
	next()
});
// Пользовательская страница 500
app.use(function (err, req, res, next) {
	console.error(err.stack);
	res.status(500).send('Something broke!');
});

export default app


