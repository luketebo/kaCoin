import App from './App'

import {
	createSSRApp
} from 'vue'

import uView from "./uni_modules/vk-uview-ui"
export function createApp() {
	const app = createSSRApp(App)
	app.use(uView)
	return {
		app
	}
}
