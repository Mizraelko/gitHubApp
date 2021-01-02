import React, {useEffect, useState} from 'react';
import './main.less';
import {useDispatch, useSelector} from "react-redux";
import {getResponse} from "../axios/actionsRepos/repos";
import Repo from "./Repos/Repo";


const Main = () => {
    const dispatch = useDispatch();
    const repos = useSelector(state => state.reposReducer.items);
    const isFetching = useSelector(state => state.reposReducer.isFetching)
    const [searchValue, setSearchValue] = useState('');


    useEffect(() => {
        dispatch(getResponse())
    }, [])

    function searchHandler() {
        dispatch(getResponse(searchValue))
    }

    return (


        <div>
            <div className='search'>
                <input value={searchValue} onChange={(e) => setSearchValue(e.target.value)} type="text" className="search_input" placeholder="search name"/>
                <button className='search_btn' onClick={() => {searchHandler()}}>Search</button>
            </div>
            <div>
                {
                    isFetching === false ? repos.map((repo) => { return <div className='element'><Repo repo={repo}/></div>}) : <div className='fetching'></div>
                }
            </div>

        </div>
    );
};

export default Main;