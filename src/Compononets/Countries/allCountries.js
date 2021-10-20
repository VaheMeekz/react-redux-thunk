import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getCountriesThunk} from "../../Redux/Action/Country.action";

const AllCountries = () => {
    const allCountries = useSelector(state => state.countryReducer.allCountries)
    const dispatch = useDispatch()

    console.log(allCountries)

    useEffect(() => {
        dispatch(getCountriesThunk())
    }, [])

    return (
        <div>
            {
                allCountries.map(c => {
                    return <div>
                        {c.name.common}
                    </div>
                })
            }
        </div>
    );
};

export default AllCountries;