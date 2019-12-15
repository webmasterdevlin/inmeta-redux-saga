/* action types */
export const FETCH_HEROES_REQUEST = "FETCH_HEROES_REQUEST";
export const FETCH_HEROES_SUCCESS = "FETCH_HEROES_SUCCESS";
export const FETCH_HEROES_FAIL = "FETCH_HEROES_FAIL";

export const DELETE_HERO_REQUEST = "DELETE_HERO_REQUEST";
export const DELETE_HERO_SUCCESS = "DELETE_HERO_SUCCESS";
export const DELETE_HERO_FAIL = "DELETE_HERO_FAIL";


/*
action creators for Saga, which uses function generator side effect.
Saga will watch these requests
*/

export const fetchHeroes = () => ({
    type: FETCH_HEROES_REQUEST
});

export const removeHero = (id) => ({
    type: DELETE_HERO_REQUEST,
    payload: id
})