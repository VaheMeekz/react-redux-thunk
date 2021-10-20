import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addCountryAC, deleteCountryAC} from "../../Redux/Action/Country.action";

const Country = () => {

    const countries = useSelector(state => state.countryReducer.countries)
    const [value, setValue] = useState('');
    const dispatch = useDispatch()

    const send = () => {
        dispatch(addCountryAC({id: Math.random() , country : value}))
        setValue('');
    }

    const delCountry = (id) => {
        dispatch(deleteCountryAC(id))
    }

    return (
        <div>
            {countries.map(({id, country}) =>{
                return (
                    <>
                        <p key={id}>
                            {country}
                        </p>

                        <button onClick={() => delCountry(id)} >Delete</button>
                    </>
                )
            })}<br/>
            <input value={value} onChange={e =>setValue( e.target.value)}/>
            <button onClick={send}>Send</button>
        </div>
    );
};

export default Country;
