import './App.css';
import Navbar from './components/navbar';
import Home from './components/pages/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import React from 'react';

function App() {
	return (
		<>
		<Router>
			<Navbar />
			<Routes>
				<Route path='/' exact />
			</Routes>
		</Router>

		<Router>
			<Home />
			<Routes>
				<Route path='/' exact />
			</Routes>
		</Router>
		<div>
		</div>
			
	</>
	);
}

export default App;
