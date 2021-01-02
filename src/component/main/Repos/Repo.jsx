import React from 'react';
import './repo.less';

const Repo = ({repo}) => {
    return (
        <div className='repos'>
            <div className="repos_header">
                <div className="repos_header__name">
                    Имя репозитория: {repo.name}
                </div>
                <div className="repos_header__stars">
                    Количество звёзд на репозитория: {repo.stargazers_count}
                </div>
            </div>
            <div className="repos_last_commit"><a href={repo.html_url} className="repos_repo-link">Ссылка на репозиторий</a></div>

        </div>
    );
};
export default Repo;
