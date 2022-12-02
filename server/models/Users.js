import mongoose from 'mongoose';

const UsersSchema = new mongoose.Schema({
	id: {
		type: Number,
		required: true,
	},
	surname: {
		type: String,
		required: true,
	},
	name: {
		type: String,
		required: true,
	},
	patronymic: {
		type: String,
		required: true,
	},

	answers: [],
});

export default mongoose.model('Users', UsersSchema);
