import React from 'react';
import { render } from 'react-dom';
import {Link} from 'react-router-dom';

const Header=()=>{
    return(
        <header className="header">

		<h1 className="header__title">Superkvíz</h1>

		<nav className="menu">
            <Link to="/" className="menu__link menu__link--active">Úvod</Link>
			<a href="#" className="menu__link">Kvízy</a>
			<Link to="dashboard" className="menu__link">Žebříček</Link>
		</nav>

	</header>
    )

}
export default Header;