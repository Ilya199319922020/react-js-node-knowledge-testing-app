import axios from 'axios';

export const intance = axios.create({
	baseURL: 'http://127.0.0.1:5000/api',
});

export const TestApi = {
	setDataRegastrationUser(dataValue)  {
		return intance.post('/createUser', dataValue);
	},
}