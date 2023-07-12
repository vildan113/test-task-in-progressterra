import { StrictMode } from "react"
import ReactDOM from "react-dom/client"
import { App } from "src/components"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<StrictMode>
		<App />
	</StrictMode>
)
