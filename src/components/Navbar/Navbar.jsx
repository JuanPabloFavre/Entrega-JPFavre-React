import React from 'react'
import '../../styles/style.css'
import { NavLink,useNavigate } from 'react-router-dom'





const Navbar = (props) => {
	
	const {navbar_Items} = props
	const navigate = useNavigate()



	return (

		<nav className="navbar bg-body-tertiary opacity-90">
			<div className="container-fluid">
			<button className='btn btn-info btn-lg' onClick={()=>navigate(-1)}><ion-icon name="arrow-back-sharp"></ion-icon></button>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav">
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