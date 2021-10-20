import React, {useEffect} from 'react';
import {getPostsThunk} from "../../Redux/Action/Country.action";
import {useDispatch, useSelector} from "react-redux";

const Posts = () => {
    const posts = useSelector(state => state.countryReducer.posts)
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getPostsThunk())
    }, [])
    return (
        <div>
            {
                posts.map(p => {
                    return <div key={p.id}>
                        {p.title}
                    </div>
                })
            }
        </div>
    );
};

export default Posts;