import React from 'react';
import './repo.less'
import {NavLink} from "react-router-dom";

const Repo = ({repo}) => {

    return (
        <div className="repo">
            <div className="repo-header">
                <div className="repo-header-name"><NavLink to={`/card/${repo.owner.login}/${repo.name}`}>{repo.name}</NavLink></div>
                <div className="repo-header-stars">Количество звезд: {repo.stargazers_count}</div>
                <div className="repo-header-avatar"><img src={repo.owner.avatar_url} alt=""/></div>
            </div>
            <div className="repo-last-commit">Последний коммит: {repo.updated_at}</div>
            <a href={repo.html_url} className="repo-link">Ссылка на репозиторий</a>
        </div>
    );
};

export default Repo;
