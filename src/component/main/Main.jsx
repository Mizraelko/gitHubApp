import React, {useEffect, useState} from 'react';
import './main.less';
import {useDispatch, useSelector} from "react-redux";
import {getResponse} from "../axios/actionsRepos/repos";
import Repo from "./Repos/Repo";
import {setCurrentPage} from "../../reducers/reposReducers";
import {createPages} from "../util/createPages";


const Main = () => {
    const dispatch = useDispatch();
    const repos = useSelector(state => state.reposReducer.items);
    const isFetching = useSelector(state => state.reposReducer.isFetching);
    const currentPage = useSelector(state => state.reposReducer.currentPage);
    const perPage = useSelector(state => state.reposReducer.perPage);
    const totalCount = useSelector(state => state.reposReducer.totalCount);
    const [searchValue, setSearchValue] = useState('');
    const pagesCount = Math.ceil(totalCount/perPage);
    const pages = [];
    createPages(pages, pagesCount, currentPage);




    useEffect(() => {
        dispatch(getResponse(searchValue, currentPage, perPage));

    }, [currentPage]);

    function searchHandler() {
        dispatch(setCurrentPage(1));
        dispatch(getResponse(searchValue, currentPage, perPage));
    }


    return (


        <div>
            <div className='search'>
                <input value={searchValue} onChange={(e) => setSearchValue(e.target.value)} type="text" className="search_input" placeholder="search name"/>
                <button className='search_btn' onClick={() => {searchHandler()}}>Search</button>
            </div>
            <div>
                {
                    isFetching === false ? repos.map((repo) => { return <div className='element' key={repo.id}><Repo repo={repo}/></div>}) : <div className='fetching'></div>
                }
            </div>
            <div className="pages">
                {pages.map((page, index) =>
                    <span
                        key={index}
                        className={currentPage === page ? 'selected' : 'page'}
                        onClick={() => dispatch(setCurrentPage(page))}>
                        {page}
                    </span> )}
            </div>

        </div>
    );
};

export default Main;