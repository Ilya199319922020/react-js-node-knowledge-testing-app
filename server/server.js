import app from './app.js'
import mongoose from 'mongoose';

// import { createConnection } from './database.js'
// import open from 'child_process'

const port = 5000;
const host = '127.0.0.1';

//  mongoose
// 	.connect('mongodb+srv://Ilya:cucha098@cluster0.2dvnw.mongodb.net/test?retryWrites=true&w=majority')
// 	.then(() => console.log('DB ок!'))
// 	.catch((err) => { console.log('Error DB:', err) })

app.listen(port, host, () => console.log(
	`Запущено на http://127.0.0.1:${port}; ` +
	`нажмите Ctrl+C для завершения.`
));

// const url = `http://localhost:${port}`;
// const start = (process.platform == 'darwin' ? 'open' : process.platform == 'win32' ? 'start' : 'xdg-open');
// open.exec(start + ' ' + url)