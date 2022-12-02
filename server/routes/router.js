import express from 'express';
import mongoose from 'mongoose';
import Answers from '../models/Answers.js';
import Users from '../models/Users.js';

const router = express.Router();

router.post('/set', async (req, res) => {
	try {
		const arrValue = req.body.answers;
		
		const [model] = await Answers.find();
		const [modelUser] = await Users.find({ id: mongoose.Types.ObjectId(req.body.id) });
		
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

		res.status(200).json(modelUser)
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

export default router;