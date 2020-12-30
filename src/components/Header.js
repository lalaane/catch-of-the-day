import React from 'react';

//stateless functional component with es6 =>function and implicit return
const Header = (props) => (
	<header className='top'>
		<h1>
			Catch
			<span className='ofThe'>
				<span className='of'>of</span>
				<span className='The'>The</span>
			</span>
			Day
		</h1>
		<h3 className='tagline'>
			<span>{props.tagline}</span>
		</h3>
	</header>
);

export default Header;
