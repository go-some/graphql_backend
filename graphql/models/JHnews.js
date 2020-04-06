
import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const JHNewsSchema = new Schema({
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
}, { collection: 'JH_news' });

export default mongoose.model('JH_news', JHNewsSchema);

// https://stackoverflow.com/questions/10547118/why-does-mongoose-always-add-an-s-to-the-end-of-my-collection-name