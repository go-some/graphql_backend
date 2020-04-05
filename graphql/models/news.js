
import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const NewsSchema = new Schema({
	title: {
		type: String,
	},
	body: {
		type: String,
	},
	url: {
		type: String,
	},
	time: {
		type: String,
	},
	origin: {
		type: String,
    },
    img: {
        type: String,
    }
});

export default mongoose.model('news', NewsSchema);