import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import {getCurrentRepo} from "../../axios/actionsRepos/repos";

const Card = (props) => {
  const { username, userRepo } = useParams();
  const[repo, setRepo] = useState({});

  useEffect( () => {
      getCurrentRepo(username, userRepo, setRepo)
  }, [])

  return (
    <div>
      <button className="btn" onClick={() => props.history.goBack()}>
        Back
      </button>
      <div className="card_name">{username}</div>
      <div className="card_repoName">{userRepo}</div>
    </div>
  );
};

export default Card;
