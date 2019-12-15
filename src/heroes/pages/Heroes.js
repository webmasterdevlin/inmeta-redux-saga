import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {fetchHeroes, removeHero} from '../hero-actions';
import Button from 'react-bootstrap/Button';
export default function Heroes() {
    const dispatch = useDispatch();
    const {heroes, isLoading} = useSelector(s => s.heroReducer);
    useEffect(() => {
        dispatch(fetchHeroes())
    }, []);
    return (
        <div>
        <h1>Super Heroes</h1>
        <ul>{isLoading ?
        <h2>Loading.. Please wait..</h2> :
             heroes.map(h => <li key={h.id}>
                            {`${h.firstName} ${h.lastName} is ${h.knownAs}`}
                            <Button onClick={() => dispatch(removeHero(h.id))}
                            variant="danger">
                                Remove
                            </Button>
                        </li>)
                }</ul>
        </div>
    )
}

