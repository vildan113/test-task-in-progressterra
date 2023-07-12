import "normalize.css"
import { useEffect, useState } from "react"

const SpeechRecognition =
	(window as any).SpeechRecognition || (window as any).webkitSpeechRecognition

const recognition = new SpeechRecognition()

const App: React.FC = () => {
	const [transcript, setTranscript] = useState("")

	const handleSpeechRecognition = (event: any) => {
		console.log(event)
		const lastResultIndex = event.results.length - 1
		const { transcript } = event.results[lastResultIndex][0]
		setTranscript(`${transcript}, ${Math.floor(Math.random() * 100)}`)
	}

	useEffect(() => {
		recognition.lang = "ru-RU"
		recognition.addEventListener("result", handleSpeechRecognition)

		return () => {
			recognition.removeEventListener("result", handleSpeechRecognition)
		}
	}, [])

	return (
		<div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
			<p>Распознанная речь: {transcript}</p>
			<button onClick={() => recognition.start()}>Запись</button>
		</div>
	)
}

export default App
