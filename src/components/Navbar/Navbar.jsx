import React from 'react'
import '../../styles/style.css'
import { NavLink } from 'react-router-dom'




const Navbar = (props) => {
	console.log(props)
	const {navbar_Items} = props



	return (

		<nav class="navbar bg-body-tertiary opacity-50">
			<div class="container-fluid">
				<a class="navbar-brand text-dark fs-1" href="/">McDowell’s</a>
				<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul class="navbar-nav">
						{
							navbar_Items.map(({path,nombre},index)=>(
								<li key={index} className="nav-item"> 
									<NavLink className="nav-link" to={path}>{nombre}</NavLink>
								</li>
								
							))

						}
						
									
					</ul>
				</div>
			</div>
		</nav>

	)
}

export default Navbar