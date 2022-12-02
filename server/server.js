import app from './app.js';

const port = 5000;
const host = '127.0.0.1';

app.listen(port, host, () => console.log(
	`Запущено на http://127.0.0.1:${port}; ` +
	`нажмите Ctrl+C для завершения.`
));