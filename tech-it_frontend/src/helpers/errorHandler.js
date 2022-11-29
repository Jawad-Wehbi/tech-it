export const buildErrorMessage = (error) => {
	console.log('error', error);
	const message = error?.response?.data?.fail?.message || error?.response?.data?.fail;
		// ?.split("<pre>")[1]
		// ?.split("</pre>")[0]
		// ?.split("Error:")[1]
		// ?.split("<br>")[0];
	return message || "Failed!";
};
