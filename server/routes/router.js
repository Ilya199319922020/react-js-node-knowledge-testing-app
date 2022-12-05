import express from 'express';
import Answers from '../models/Answers.js';
import Users from '../models/Users.js';

const router = express.Router();

router.post('/set', async (req, res) => {
	try {
		const arrValue = req.body.answers;
		const [model] = await Answers.find();
		const [modelUser] = await Users.find({ _id: req.body.id });

		if (!modelUser) {
			res.status(403).json('Не заполнены поля');
		}

		const result = [];
		for (let i = 0; i < arrValue.length; i++) {
			const arrBoolean = model.answers.map(a => a === arrValue[i] ? true : false)
			result.push(arrBoolean[i]);
		}

		modelUser.answers.push(...result);
		await modelUser.save();

		res.status(201).json(modelUser)
	} catch (error) {
		res.status(403).json(console.log(error), 'Ошибка на клиенте')
	}
});

router.post('/createUser', async (req, res) => {
	try {
		const useData = {
			surname: req.body.surname,
			name: req.body.name,
			patronymic: req.body.patronymic,
			answers: []
		};
		const modelUser = await Users.create(useData);

		res.status(201).json(modelUser)
	} catch (error) {
		res.status(403).json(console.log(error), 'Ошибка при создании пользователя')
	}
});

router.get('/user', async (req, res) => {
	try {
		const modelUser = await Users.find();
		if (!modelUser.length) {
			res.status(403).json('Нет зарегестрированных пользователей');
		}

		const arrAnswers = modelUser.map(a => a.answers);
		const arr = arrAnswers.filter(h => !!h.length);

		const resResults = [
			{ id: 1, right: [], wrong: [] },
			{ id: 2, right: [], wrong: [] },
			{ id: 3, right: [], wrong: [] },
			{ id: 4, right: [], wrong: [] },
			{ id: 5, right: [], wrong: [] },
		]
		for (let d of arr) {
			for (let i = 0; i < d.length; i++) {
				for (let a = 0; a < resResults.length; a++) {
					if (a === i && d[i] === true) {
						resResults[a].right.push(d[i]);
					} else if (a === i && d[i] === false) {
						resResults[a].wrong.push(d[i]);
					}
				}
			}
		}

		const objData = { resResults, count: arrAnswers.length }
		res.status(200).json(objData);
	} catch (error) {
		res.status(403).json(console.log(error), 'Ошибка на клиенте')
	}
});

export default router;