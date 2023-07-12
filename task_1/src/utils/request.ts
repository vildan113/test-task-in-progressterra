const request = async (url: RequestInfo | URL, init?: RequestInit) => {
	try {
		const response = await fetch(url, init)

		if (!response.ok) {
			throw new Error("Network response was not ok")
		}

		return await response.json()
	} catch (error) {
		console.error(error)
	}
}

export default request
