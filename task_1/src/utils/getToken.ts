import { request } from "."

const getToken = async ({
	accessKey,
	clientId,
	deviceId
}: {
	accessKey: string
	clientId: string
	deviceId: string
}): Promise<string | undefined> => {
	const result = await request("http://84.201.188.117:5021/api/v3/clients/accesstoken", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			AccessKey: accessKey
		},
		body: JSON.stringify({
			idClient: clientId,
			accessToken: "",
			paramName: "device",
			paramValue: deviceId,
			latitude: 0,
			longitude: 0,
			sourceQuery: 0
		})
	})

	return result.accessToken
}

export default getToken
