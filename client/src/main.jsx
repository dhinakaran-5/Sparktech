
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import ScrollToTop from "./components/ScrollToTop";
import './index.css'
import App from './App.jsx'
import { AppContextProvider } from './context/AppContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ScrollToTop/>
  <AppContextProvider>
     <App />
    </AppContextProvider>
  </BrowserRouter>,
)
