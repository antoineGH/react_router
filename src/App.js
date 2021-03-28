import React from 'react'
import { Home } from './components/Home'
import { About } from './components/About'
import { TodoContainer } from './components/TodoContainer'
import { Error_404 } from './components/Error_404'
import { Navigation } from './components/Navigation'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'

function App() {
	return (
		<div className='App'>
			{/* Create a Router component to display */}
			<Router>
				{/* Navigation would display on all pages as it is on the Router main component */}
				<Navigation />

				{/* Manage 404 Error with path to / not with exact */}
				<Switch>
					{/* Create Route with path and component to load */}
					<Route path='/' exact component={Home} />
					<Route path='/About' exact component={About} />
					<Route path='/About/:name' exact component={About} />
					<Route path='/Todo' exact component={TodoContainer} />
					<Route path='/' component={Error_404} />
				</Switch>
			</Router>
		</div>
	)
}

export default App
