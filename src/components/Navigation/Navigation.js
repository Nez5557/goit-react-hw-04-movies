import { NavLink } from 'react-router-dom';

function Navigation() {

    return (
        <>
            <NavLink className='navigation' activeClassName='activeNavigation' to="/" exact>HomePage</NavLink>
            <NavLink className='navigation' activeClassName='activeNavigation' to="/movies">Movies</NavLink>
        </>
    )
};

export default Navigation;