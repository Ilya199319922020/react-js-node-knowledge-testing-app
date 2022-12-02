import mongoose from 'mongoose';

const AnswersSchema = new mongoose.Schema({
	id: {
		type: Number,
		required: true,
	},
	answers: [{
		type: Number,
		required: true,
	},]
});

export default mongoose.model('Answers', AnswersSchema);