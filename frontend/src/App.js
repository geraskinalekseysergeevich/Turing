import Cookies from 'js-cookie'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import LoginPage from './pages/LoginPage'
import MainPage from './pages/MainPage'

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={Cookies.get('jwt_token') ? <MainPage /> : <Navigate to="/login" />}
				/>
				<Route path="/login" element={<LoginPage />} />
				<Route path="*" element={<Navigate to="/" />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
