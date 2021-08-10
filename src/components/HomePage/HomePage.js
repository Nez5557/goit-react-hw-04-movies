import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import fetch from '../../service';

function HomePage() {
    const [movies, setMovies] = useState(null);
    const location = useLocation();

    useEffect(() => {
        fetch.getPopular()
            .then(resp => setMovies(resp))
            .catch(console.log);
    }, []);


    const jsxMovies = movies && movies.map(item => {
        return (
            <li key={item.id}>
                <Link to={{pathname: `/movies/${item.id}`, state: {from: location}}}>{item.original_title}</Link>
            </li>
        )
    });

    return (
        <ul>
            {jsxMovies}
        </ul>
    )
};

export default HomePage;