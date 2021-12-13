import React, { useState, useEffect } from "react";
import "./UserBox.css";
function UserBox(props) {
  const [repos, setrepos] = useState([]);

  let user = props;

  fetch("https://api.github.com/users/" + props.login + "/repos")
    .then((resp) => {
      return resp.json();
    })
    .then((data) => {
      setrepos(data);
    });

  //   useEffect(() => {
  //     // getUsers();

  //     fetch("https://api.github.com/users/" + props.name)
  //     .then((resp) => {
  //       return resp.json();
  //     })
  //     .then((data) => {
  //       setuser(data);
  //       setIsLoading(false);
  //       console.log(data);
  //     });
  //   }, []);

  return (
    <div className="VWYX_user-box_main-div">
      <div className="VWYX_left-side" >
        
        <div className="VWWYX_img">
          <img alt="login" src={user.avatar_url} />
        </div>
        <div className="VWYX_text">
          <div>User Name: {user.login}</div>
          <div>Name: {user.name}</div>
          <div>Followers: {user.followers}</div>
          <div>Following: {user.following}</div>
          <div>Created at: {user.created_at}</div>
          <a target="_blank" href={user.url}>
            Go Github Page
          </a>
        </div>
      </div>

      <div className="VWYX_user_repos-div ">
        <div className="VWYX_head">
          <div>REPOSITORIES</div>
          <div
            onClick={() => {
              user.deleteUser(user.login);
            }}
            style={{ cursor: "pointer" }}
          >
            X
          </div>
        </div>

        <div className="VWYX_repo-divs">
          {repos.map((repo) => {
            return (
              <div className="VWYX_repo-div">
                <a href={repo.html_url} className="VWYX_repo-name">
                  {repo.name}
                </a>
                <p>{repo.description}</p>
                <span style={{alignSelf:"flex-end",fontSize:"12px"}} >{repo.created_at}</span>
                {/* <a href={repo.html_url}>Go Repository</a> */}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default UserBox;
