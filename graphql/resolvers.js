import News from './models/news';

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

const resolvers = {
	Query: {
		news: (_, { filter, skip, limit }) => getNews(filter, skip, limit),
	},
}

export default resolvers;