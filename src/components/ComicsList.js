import React , {useEffect , useReducer} from 'react';
//Import Components
import NavBar from './commons/NavBar';
import Comics from './Comics';

import './ComicsList';

//Initial State Comics;
const initialState = {
    fetching: true,
    comicsList: [],
}
//Reducer
const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_COMICS':
            return {
                ...state,
                fetching: true,
                comicsList: []
            };
        case 'FETCH_COMICS_SUCCESS':
            return{
                ...state,
                fetching: false,
                comicsList: action.payload,
            };
        default:
            return state;
    }

}

const ComicList = () => {
    // EndPoint
    const URLCOMICS = `https://cors-anywhere.herokuapp.com/https://api.shortboxed.com/comics/v1/`
    const NEWS = 'new';
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect( () => {
        dispatch({
            type: 'FETCH_COMICS',
            fetching: true,
            payload: []
        })
        const fetchComics = async () => {
            const data = await fetch(`${URLCOMICS}${NEWS}`);
            const comics = await data.json();
            if(!!comics && !! comics.comics){
                dispatch({
                    type: 'FETCH_COMICS_SUCCESS',
                    fetching: false,
                    payload: comics.comics
                })

            }
        }
        fetchComics();
    },[URLCOMICS])

    return (
        <div className="container-app">
            <NavBar/>
            { !state.fetching && (
                <Comics  comics={state.comicsList}></Comics>            
            )}
        </div>
 
    )
}

export default ComicList;