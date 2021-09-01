# React Router

# Table of contents

1. [Project description](#description)
2. [Installation instructions](#installation)
3. [Project structure](#structure)
4. [Explainations](#explainations)
5. [Screenshots](#screenshots)

## 1. Project description<a name="description"></a>

This project is a simple implementation of React Router.

Components are the heart of React's powerful, declarative programming model. React Router is a collection of navigational components that compose declaratively with your application. Whether you want to have bookmarkable URLs for your web app or a composable way to navigate in React Native

## 2. Installation instructions<a name="installation"></a>

Versions:

-   Node: 14.15.1
-   Npm: 6.14.8
-   React: 17.0.1

Download code from Github:

```shell
git clone https://github.com/antoineratat/react_router.git
```

Navigate to project directory.

```shell
cd react_intersection_observer
```

Install node modules.

```shell
npm install
```

Run the app in development mode. Open http://localhost:3000 to view it in the browser.

```shell
npm start
```

## 3. Project structure<a name="structure"></a>

-   src
    -   App.js
    -   App.css
    -   components
        -   About.js
        -   Error_404.js
        -   Home.js
        -   Navigation.js
        -   Todo.js
        -   TodoContainer.js
        -   TodoList.js

## 4. Explainations<a name="explainations"></a>

React Router, and dynamic, client-side routing, allows us to build a single-page web application with navigation without the page refreshing as the user navigates. React Router uses component structure to call components, which display the appropriate information.

### Installation

```
npm create-react-app react-router
cd react-router
npm install react-router-dom
```

-   [Home.js](src/components/Home.js)
-   [About.js](src/components/About.js)
-   [Navigation.js](src/components/Navigation.js)

### Create Route

```javascript
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
	return (
		<div className='App'>
			<Router>
				<Navigation />
				<Route path='/' exact component={Home} />
				<Route path='/About' exact component={About} />
			</Router>
		</div>
	)
}
export default App
```

### Manage Links

```javascript
import React from 'react'
import Link from 'react-router-dom'

export const Navigation = () => {
	return (
		<ul style={{ display: 'flex' }}>
			{/* Create Link to=... */}
			<Link to='/'>
				<li style={{ marginLeft: 10, listStyle: 'none' }}>Home</li>
			</Link>

			<Link to='/About'>
				<li style={{ marginLeft: 10, listStyle: 'none' }}>About</li>
			</Link>
		</ul>
	)
}
```

### Router Switch

Switch allow to render only the first route that matches.

```javascript
<Router>
	<Navigation />
	<Switch>
		<Route path='/' exact component={Home} />
		<Route path='/About' exact component={About} />

		{/* Catch all pages that didn't match the routes before and display Error_404 */}
		<Route path='/' component={Error_404} />
	</Switch>
</Router>
```

### History

App Architecture, use to navigate between pages. Use useHistory (custom react-router hook).

```javascript
import React from 'react'
import { useHistory } from 'react-router-dom'

export const About = () => {
	// Using useHistory Hook
	const history = useHistory()

	return (
		<div>
			<h1>About Component Page</h1>
			{/* onClick arrow function history.push to path */}
			<button onClick={() => history.push('/')}>Home</button>
		</div>
	)
}
```

### Navlink

1. Handle activeClassName, Eg: color selected link in navbar

```javascript
import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navigation = () => {
	return (
		<ul style={{ display: 'flex' }}>
			{/* Use activeClassName to apply our CSS style to the exact current NavLink */}
			<NavLink exact activeClassName='current' to='/'>
				<li style={{ marginLeft: 10, listStyle: 'none' }}>Home</li>
			</NavLink>

			<NavLink exact activeClassName='current' to='/About'>
				<li style={{ marginLeft: 10, listStyle: 'none' }}>About</li>
			</NavLink>
		</ul>
	)
}
```

2. useParams Slug

useParams returns an object of key/value pairs of URL parameters. Use it to access match.params of the current Route

Update the Router, Route component.

```javascript
<Route path='/About/:name' exact component={About} />
```

```javascript
import { useParams } from 'react-router-dom'

export const About = () => {
	const history = useHistory()
	let name = useParams().name
	let message = ''
	name ? (message = 'This page is about ' + name) : (message = '')

	return (
		<div>
			<h1>About Component Page</h1>
			<p>{message}</p>
			<button onClick={() => history.push('/')}>Home</button>
		</div>
	)
}
```

3. useLocation

The useLocation hook returns the location object that represents the current URL. You can think about it like a useState that returns a new location whenever the URL changes.

In home.js

```javascript
import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'

export const Home = () => {
	const history = useHistory()
	let location = useLocation()

	return (
		<div>
			<h1>Home Component Page</h1>
			<button onClick={() => history.push('/About')}>About</button>

			<div>
				<p>{location.state.contact}</p>
			</div>
		</div>
	)
}
```

In about.js

```javascript
import React from 'react'
import { useHistory } from 'react-router-dom'
import { useParams, Link } from 'react-router-dom'

export const About = () => {
	const history = useHistory()
	let name = useParams().name
	let message = ''
	name ? (message = 'This page is about ' + name) : (message = '')

	return (
		<div>
			<h1>About Component Page</h1>
			<p>{message}</p>
			<button onClick={() => history.push('/')}>Home</button>

			<Link
				to={{
					pathname: '/',
					state: {
						contact: name,
					},
				}}>
				Go to Home with state
			</Link>
		</div>
	)
}
```

## 5. Screenshots<a name="screenshots"></a>

![React Router Screenshot](https://templars.guru/app/github/react_router/1.PNG)
