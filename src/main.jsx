import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import MeteorTrail from './components/MeteorTrail/MeteorTrail.jsx'

createRoot(document.getElementById('root')).render(
	<StrictMode>
		{/* <div
			className='App'
			style={{ height: '100vh', position: 'relative', overflow: 'hidden' }}
		> */}
			<MeteorTrail />
		{/* </div> */}
		<App />
	</StrictMode>
)
