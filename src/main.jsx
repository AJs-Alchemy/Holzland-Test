import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// No React.StrictMode: the page embeds a WebGL/Spark twin, and StrictMode's
// double effect invocation can double-initialise the GL context in dev.
ReactDOM.createRoot(document.getElementById('root')).render(<App />)
