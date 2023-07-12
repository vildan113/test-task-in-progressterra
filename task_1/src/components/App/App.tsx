import "normalize.css"
import { Route, Routes } from "react-router-dom"
import { Home } from "src/pages"
import "./styles.css"

const App: React.FC = () => {
	return (
		<Routes>
			<Route
				path="/"
				element={<Home />}
			/>
		</Routes>
	)
}

export default App
