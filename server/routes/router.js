import express from 'express';
import users from '../../../React-NodeJs-fullstack-project-/server/mappers/users.js';
import Answers from '../models/Answers.js';

const router = express.Router();

router.post('/set', async (req, res) => {
	try {
		const arrValue = req.body.arr;

		const [model] = await Answers.find();

		const result = [];
		for (let i = 0; i < arrValue.length; i++) {
			const arrBoolean = model.answers.map(a => a === arrValue[i] ? true : false)
			result.push(arrBoolean[i]);
		}

		res.status(201).json(result)
	} catch (error) {
		res.status(403).json(console.log(error), 'Ошибка на клиенте')
	}
});


export default router;