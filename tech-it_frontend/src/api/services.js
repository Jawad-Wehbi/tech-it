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

export const get = async (urlParams, params = {}) => {
	let { resource, action } = urlParams;
	try {
		const response = await axios.get(`${API_ENDPOINT}/api/${resource}/${action}`, {
			params: params
		});
		return response.data;
	} catch (error) {
		throw new Error(buildErrorMessage(error));
	}
};

export const update = async (urlParams, params) => {
	let { resource, action } = urlParams;
	try {
		const response = await axios.put(`${API_ENDPOINT}/api/${resource}/${action}`, params);
		return response;
	} catch (error) {
		throw new Error(buildErrorMessage(error));
	}
};
