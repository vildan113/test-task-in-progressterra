interface IConfig {
	accessKey: string
	clientId: string
	deviceId: string
}

const config: IConfig = {
	accessKey: String(import.meta.env.VITE_ACCESS_KEY),
	clientId: String(import.meta.env.VITE_CLIENT_ID),
	deviceId: String(import.meta.env.VITE_DEVICE_ID)
}

export default config
