// Wrapping Movie API
import axios from "axios"

const BASE_URL = 'https://feeeld.com/api';
const HOT_POST_URL = `${BASE_URL}/post/hot`

const areaList = [
    '건축', '실내건축', '산업디자인', '시각디자인', '패션디자인',
];
const areaNumList = [
    2, 3, 5, 7, 11
];

export const getHotPosts = async (offset) => {
	const {
		data: {
			posts
		}
	} = await axios(`${HOT_POST_URL}/${offset}`);
	return posts;
}