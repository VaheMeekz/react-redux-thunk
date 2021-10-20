import {ADD_COUNTRY, DELETE_COUNTRY, GET_COUNTRIES, GET_POSTS} from "../Action/Country.action";

const initialState = {
    countries :  [
        {id: Math.random() , country : "Armenia"},
        {id: Math.random() , country : "USA"},
        {id: Math.random() , country : "Russia"}
    ],
    allCountries: [],
    posts: []
}

export const countryReducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_COUNTRY:
            return {
                ...state,
                countries : [...state.countries , action.payload]
            }
        case DELETE_COUNTRY:
            return {
                ...state,
                countries: state.countries.filter(c => c.id !== action.payload)
            }
        case GET_COUNTRIES:
            return {
                ...state,
                allCountries: action.payload
            }
        case GET_POSTS:
            return {
                ...state,
                posts: action.payload
            }
        default:
            return state
    }
}