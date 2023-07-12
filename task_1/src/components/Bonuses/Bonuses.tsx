import { useMemo } from "react"
import { ReactComponent as Chevron } from "src/assets/chevron.svg"
import { ReactComponent as FireIcon } from "src/assets/fire-icon.svg"
import "./styles.css"

interface IProps extends React.ComponentProps<"div"> {
	dateBurning: string
	burningQuantity: number
	currentQuantity: number
}

const Bonuses: React.FC<IProps> = ({
	dateBurning,
	burningQuantity,
	currentQuantity,
	className,
	...rest
}) => {
	const date = useMemo(() => dateFormatting(dateBurning), [dateBurning])

	return (
		<div
			{...rest}
			className={className ? `${className} bonus-card` : "bonus-card"}
		>
			<div className="bonus-card__info">
				<h1 className="bonus-card__current-quantity">{currentQuantity} бонусов</h1>
				<div className="bonus-card__burning">
					<div className="bonus-card__burning-date">{date} сгорит</div>
					<FireIcon className="bonus-card__path-icon" />
					<div className="bonus-card__burning-quantity">{burningQuantity} бонусов</div>
				</div>
			</div>
			<div className="bonus-card__button">
				<Chevron className="bonus-card__button-icon" />
			</div>
		</div>
	)
}

const dateFormatting = (date: string) => {
	const newDate = new Date(date)

	const day = newDate.getDate()
	const month = newDate.getMonth() + 1

	const formattedDay = day < 10 ? "0" + day : day
	const formattedMonth = month < 10 ? "0" + month : month

	return `${formattedDay}.${formattedMonth}`
}

export default Bonuses
