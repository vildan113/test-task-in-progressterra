import { request } from "."

interface IBonuses {
	typeBonusName: string
	currentQuantity: number
	forBurningQuantity: number
	dateBurning: string
}

const getBonuses = async ({
	accessKey,
	accessToken
}: {
	accessKey: string
	accessToken: string
}): Promise<IBonuses | undefined> => {
	const result = await request(
		`http://84.201.188.117:5003/api/v3/ibonus/generalinfo/${accessToken}`,
		{
			method: "GET",
			headers: {
				AccessKey: accessKey
			}
		}
	)

	return result.data
}

export default getBonuses
