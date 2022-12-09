import express from 'express';
import mongoose from 'mongoose';
import router from './routes/router.js';
import bodyParser from 'body-parser';

mongoose
	.connect('mongodb+srv://Ilya:cucha098@cluster0.2dvnw.mongodb.net/test?retryWrites=true&w=majority')
	.then(() => console.log('DB ок!'))
	.catch((err) => { console.log('Error DB:', err) })

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

function cors(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Methods", "GET, PUT, PATCH, POST, DELETE");
	res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
	next();
}
app.use(cors);

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


