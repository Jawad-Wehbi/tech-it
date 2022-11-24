import axios from './axios';
import { buildErrorMessage } from '../helpers/errorHandler';

const API_ENDPOINT = 'http://localhost:3000';
const token = localStorage.getItem('access_token');

console.log('token :>> ', token);

export const post = async (urlParams, params = {}) => {
	let { resource, action } = urlParams;
	try {
		const response = await axios.post(`${API_ENDPOINT}/${resource}/${action}`, params, {
			headers: {
				Authorization: `Basic ${token}`
			}
		});
		return response.data;
	} catch (error) {
		throw new Error(buildErrorMessage(error));
	}
};

export const get = async (urlParams, params = {}) => {
	let { resource, action } = urlParams;
	try {
		const response = await axios.get(
			`${API_ENDPOINT}/${resource}/${action}`,
			{
				params: params
			},
			{
				headers: {
					Authorization: `Basic ${token}`
				}
			}
		);
		return response.data;
	} catch (error) {
		throw new Error(buildErrorMessage(error));
	}
};

export const update = async (urlParams, params) => {
	let { resource, action } = urlParams;
	try {
		const response = await axios.put(`${API_ENDPOINT}/${resource}/${action}`, params, {
			headers: {
				Authorization: `Basic ${token}`
			}
		});
		return response;
	} catch (error) {
		throw new Error(buildErrorMessage(error));
	}
};
