/* action types */
export const FETCH_HEROES_REQUEST = "FETCH_HEROES_REQUEST";
export const FETCH_HEROES_SUCCESS = "FETCH_HEROES_SUCCESS";
export const FETCH_HEROES_FAIL = "FETCH_HEROES_FAIL";

export const REMOVE_HERO_REQUEST = "REMOVE_HERO_REQUEST";
export const REMOVE_HERO_SUCCESS = "REMOVE_HERO_SUCCESS";
export const REMOVE_HERO_FAIL = "REMOVE_HERO_FAIL";


/*
action creators for Saga, which uses function generator side effect.
Saga will watch these requests
*/

export const fetchHeroes = () => ({
    type: FETCH_HEROES_REQUEST
});

export const removeHero = (id) => ({
    type: REMOVE_HERO_REQUEST,
    payload: id
})