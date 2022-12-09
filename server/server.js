import app from './app.js';


const port = process.env.PORT || 5000;
const host = process.env.HOST || '127.0.0.1';

app.listen(port, host, () => console.log(
	`Запущено на http://127.0.0.1:${port}; ` +
	`нажмите Ctrl+C для завершения.`
));