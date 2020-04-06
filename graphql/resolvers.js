import News from './models/news';
import JHNews from './models/JHnews';

const getNews = async (filter, skip, limit) => {
	let query = News.find(JSON.parse(filter))
	if (skip > 0) {
		query = query.skip(skip);
	}
	if (limit > 0) {
		query = query.limit(limit);
	}
	return await query;
};

const getJHNews = async (filter, skip, limit) => {
	let query = JHNews.find(JSON.parse(filter))
	if (skip > 0) {
		query = query.skip(skip);
	}
	if (limit > 0) {
		query = query.limit(limit);
	}
	return await query;
};

const resolvers = {
	Query: {
		news: (_, { filter, skip, limit }) => getNews(filter, skip, limit),
		jhnews: (_, { filter, skip, limit }) => getJHNews(filter, skip, limit),
	},
}

export default resolvers;