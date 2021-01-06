import React from 'react';
import PropTypes from 'prop-types';

//stateless functional component with es6 =>function and implicit return
const Header = props => (
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

Header.propTypes = {
	tagline: PropTypes.string.isRequired,
};
export default Header;
