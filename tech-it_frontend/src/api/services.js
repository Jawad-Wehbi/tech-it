import axios from '../helpers/API';
import { buildErrorMessage } from '../helpers/errorHandler';

const API_ENDPOINT = 'http://localhost:3000';

export const post = async (urlParams, params = {}) => {
	let { resource, action } = urlParams;
	try {
		const response = await axios.post(`${API_ENDPOINT}/api/${resource}/${action}`, params);
		return response.data;
	} catch (error) {
		throw new Error(buildErrorMessage(error));
	}
};
