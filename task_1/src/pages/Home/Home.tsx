import { useEffect, useState } from "react"
import { ReactComponent as InformationIcon } from "src/assets/information-icon.svg"
import { Bonuses } from "src/components"
import config from "src/config"
import { getBonuses, getToken } from "src/utils"
import "./styles.css"

interface IState {
	burningQuantity: number
	currentQuantity: number
	dateBurning: string
}

const Home: React.FC = () => {
	const [data, setData] = useState<IState | null>(null)

	const getData = async () => {
		const token = await getToken({
			accessKey: config.accessKey,
			clientId: config.clientId,
			deviceId: config.deviceId
		})

		if (!token) return

		const bonuses = await getBonuses({
			accessKey: config.accessKey,
			accessToken: token
		})

		if (!bonuses) return

		setData({
			burningQuantity: bonuses.forBurningQuantity,
			currentQuantity: bonuses.currentQuantity,
			dateBurning: bonuses.dateBurning
		})
	}

	useEffect(() => {
		getData()
	}, [])

	return (
		<div
			className="homepage"
			// style={{ width: "375px", margin: "auto" }}
		>
			<div className="homepage__logo">ЛОГОТИП</div>
			<InformationIcon className="homepage__information-icon" />
			{data != null && (
				<Bonuses
					className="homepage__bonuses"
					burningQuantity={data.burningQuantity}
					currentQuantity={data.currentQuantity}
					dateBurning={data.dateBurning}
				/>
			)}
		</div>
	)
}

export default Home
