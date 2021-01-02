import React from 'react';
import {useParams} from "react-router-dom";


const Card = (props) => {
    const {username, userRepo} = useParams()
    console.log(props)



    return (
        <div>
            <button className='btn' onClick={() =>  props.history.goBack()}>Back</button>
                <div className='card_name'>{username}</div>
                <div className='card_repoName'>{userRepo}</div>
        </div>
    );
};

export default Card;