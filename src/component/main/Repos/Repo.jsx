import React from "react";
import "./repo.less";
import { NavLink } from "react-router-dom";

const Repo = ({ repo }) => {
  const avatar = repo.owner.avatar_url;
  return (
    <div className="repos">
      <div className="repos_header">
        <div className="repos_header__name">
          Имя репозитория:{" "}
          <NavLink to={`/card/${repo.owner.login}/${repo.name}`}>
            {" "}
            {repo.name}{" "}
          </NavLink>
        </div>
        <div className="repos_header__stars">
          Количество звёзд на репозитория: {repo.stargazers_count}
        </div>
        <div className="repos_header__img">
          <img src={avatar} alt="image repositories" />
        </div>
      </div>
      <div className="repos_last_commit">
        <a href={repo.html_url} className="repos_repo-link">
          Ссылка на репозиторий
        </a>
      </div>
    </div>
  );
};
export default Repo;
