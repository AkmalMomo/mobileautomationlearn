import axios from "axios";

const sendAuthRequest = async (BASEURL: string) => {
	//Request Body Data
	const authReqBody = JSON.stringify({
		email: "",
		password: "",
		token: "",
		ipAddress: "203.25.17.110",
		url: "",
	});

	//Headers, HTTP Request Method and Config
	const config = {
		method: "post",
		maxBodyLength: Infinity,
		url: `${BASEURL}/account/authToken`,
		headers: {
			"Content-Type": "application/json",
		},
		data: authReqBody,
	};

	try {
		const response = await axios.request(config);
		console.log(JSON.stringify(response.data));
		return response.data;
	} catch (error) {
		console.error(error);
		throw error;
	}
};

export default sendAuthRequest;
