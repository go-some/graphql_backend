import { getHotPosts } from "./proxy";

const resolvers = {
	Query: {
		hotPosts: (_, { offset }) => getHotPosts(offset),
	},
}

export default resolvers;