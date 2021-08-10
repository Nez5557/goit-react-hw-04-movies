import fetch from '../../service';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function Casts({id}) {
    const [actors, setActors] = useState([]);

    useEffect(() => {
        fetch.getActorsById(id).then(responce => {
            setActors(responce.cast);
        });
    }, [id]);


    const jsxActorsCard = actors.map(item => {
        let imgPath = 'https://naytizapchast.com.ua/source/default.jpg'
        if (item.profile_path) {
            imgPath = `https://image.tmdb.org/t/p/w500${item.profile_path}`;
        };

        return (
            <li key={item.id}>
                <img src={imgPath} alt="actors's phase" />
                <p>Actor's Name:{item.name}</p>
                <p>Character:{item.character}</p>
                <hr/>
            </li>
        )
    })

    return (
        <ul>
            {jsxActorsCard}
        </ul>
    )

};

Casts.propTypes = {
    id: PropTypes.string.isRequired,
}

export default Casts;