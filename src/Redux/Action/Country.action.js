import axios from 'axios'

export const ADD_COUNTRY = 'ADD_COUNTRY';
export const DELETE_COUNTRY = 'DELETE_COUNTRY'
export const GET_COUNTRIES = 'GET_COUNTRIES'
export const GET_POSTS = 'GET_POSTS'


export const addCountryAC = (country) => {
    return {
        type: ADD_COUNTRY,
        payload: country
    }
}

export const deleteCountryAC = (id) => {
    return {
        type: DELETE_COUNTRY,
        payload: id
    }
}

export const getCountriesThunk = () => {
    return async dispatch => {
        const response = await axios.get('https://restcountries.com/v3.1/all')
        dispatch({
            type: GET_COUNTRIES,
            payload: response.data
        })
    }
}


export const getPostsThunk = () => {
    return async dispatch => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
        dispatch({
            type: GET_POSTS,
            payload: response['data']
        })
    }
}
