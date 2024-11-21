import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import MeteorTrail from './components/MeteorTrail/MeteorTrail.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<MeteorTrail />
		<App />
	</StrictMode>
)
