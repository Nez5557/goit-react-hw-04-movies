import { useParams, Route, NavLink, useRouteMatch, Switch, useLocation, useHistory} from 'react-router-dom';
import { useEffect, useState, lazy, Suspense } from 'react';
import fetch from '../../service';

const Casts = lazy(() => import('../Casts/Casts.js' /* webpackChunkName: 'Casts' */));
const Reviews = lazy(() => import('../Reviews/Reviews.js' /* webpackChunkName: 'Reviews' */));

function MovieDetailsPage() {
    const [img, setImg] = useState('https://naytizapchast.com.ua/source/default.jpg');
    const [title, setTitle] = useState('');
    const [userScores, setUserScores] = useState('');
    const [overview, setOverview] = useState('');
    const [genres, setGenres] = useState([]);

    const { idMovie } = useParams();
    const { url } = useRouteMatch();
    const history = useHistory();
    const location = useLocation();
    
    useEffect(() => {
        fetch.getMovieById(idMovie)
            .then(responce => {
                if (responce.poster_path) {
                    setImg(`https://image.tmdb.org/t/p/w500${responce.poster_path}`);
                };
                setTitle(responce.original_title);
                setUserScores(responce.vote_average);
                setOverview(responce.overview);
                setGenres(responce.genres);
            })
            .catch(console.log);
    }, [idMovie]);

    function clickHandler(e) {
        if (!location?.state?.from) {
            history.push('/')
            return
        }
        history.push(location.state.from)
    }

    return (
        <>
            <br/>
            <button onClick={clickHandler}>go back</button>    
            <img src={img} alt='poster of movie' />

            <h1>{title}</h1>
            <p>user score: {userScores}</p>

            <h2>Overview:</h2>
            <p>{overview}</p>

            <h2>Genres:</h2>
            <p>{genres.map(item=>item.name).join(' ')}</p>

            <h2>additional info</h2>
            <ul>
                <li><NavLink className='addInfo' activeClassName='activeAddInfo' to={{...location, pathname: `${url}/cast`}}>Casts</NavLink></li>
                <li><NavLink className='addInfo' activeClassName='activeAddInfo' to={{...location, pathname: `${url}/reviews`}}>Reviews</NavLink> </li>
                <hr/>
            </ul>

            <Suspense fallback={<h2>Loading...</h2>}>
                <Switch>
                    <Route path={`${url}/cast`}>
                        <Casts id={idMovie} />
                    </Route>

                    <Route path={`${url}/reviews`}>
                        <Reviews id={idMovie} />
                    </Route>
                </Switch>
            </Suspense>
        </>
    )
};

export default MovieDetailsPage;