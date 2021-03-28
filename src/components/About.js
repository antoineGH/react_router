import React from 'react'
import { useHistory } from 'react-router-dom'
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
