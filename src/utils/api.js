import axios from "axios";

const API_ENDPOINT = "https://bucketplace-coding-test.s3.amazonaws.com/cards";

export const api = {
	houseList : async (pageNum = 1) => await axios.get(`${API_ENDPOINT}/page_${pageNum}.json`)
}