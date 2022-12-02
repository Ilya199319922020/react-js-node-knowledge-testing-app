import mongoose from 'mongoose';
import connection from '../libs/connection';

const testSchema = new mongoose.Schema({
	id: {
		type: Number,
		required: true,
	},
	user_id: {
		type: Number,
		required: true,
	},
	list: [answersSchema],
});

// module.exports = connection.model('test', testSchema);