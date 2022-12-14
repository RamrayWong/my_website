import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './navbar.css';
import {Button} from './Button';

function Navbar() {

	const [click, setClick] = useState(false);
	const [button, setButton] = useState(true);
	const handleClick = () => setClick (!click);
	const closeMobileMenu = () => setClick(false);
	
	const showButton = () => {
		if (window.innerWidth <= 960) {
			setButton(false);
		} else {
			setButton(true);
		}
	};

	window.addEventListener('resize', showButton);

	return (
		<>
			<nav className='navbar'>
				<div className='navbar-container'>
					<Link to='/' className='navbar-logo'>
						RAMRAY WONG
					</Link>
					<div className='menu-icon' onClick={handleClick}>
						<i className={click ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'} />
					</div>
					<ul className={click ? 'nav-menu active' : 'nav-menu'}>
						<li className='nav-item'>
							<Link to='/' className='nav-links' onClick={closeMobileMenu}>
								HOME
							</Link>
						</li>
						<li className='nav-item'>
							<Link to='/services' className='nav-links' onClick={closeMobileMenu}>
								SERVICES
							</Link>
						</li>
						<li className='nav-item'>
						<Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
								CONTACT
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		</>
	)
}

export default Navbar;