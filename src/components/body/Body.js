import React, { useState, useEffect } from "react";
import Content from "../content/Content";
import Navbar from "../navbar/Navbar";
import UserBox from "../userbox/UserBox";

function Body() {
  const [name, setname] = useState();
  const [users, setusers] = useState([]);
  const [randomNames, setrandomNames] = useState([]);

  const getRandomProfile = () => {
    fetch("https://api.github.com/users")
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        setrandomNames(data);
      })
      .then(()=>{
        return Math.floor(Math.random() * randomNames.length);
      })
      .then((random)=>{
        fetchData(randomNames[random].login);
        console.log(randomNames[random].login);
      })

  };

  const getName = (inputName) => {
    setname(inputName);
  };

  const deleteUser = (name) => {
    setusers(users.filter((user) => user.login != name));
  };

  const fetchData = (name) => {
    console.log(name);
    if (name != undefined) {
      fetch("https://api.github.com/users/" + name)
        .then((resp) => {
          return resp.json();
        })
        .then((data) => {
          console.log(data);
          let Xarray = [data];
          setusers(Xarray.concat(users));
          //   setusers((users) => [...users, data]);
        });
    }
  };

  useEffect(() => {
    fetchData(name);
  }, [name]);

  return (
    <div>
      <Navbar getRandomProfile={getRandomProfile} getName={getName}></Navbar>
      {users.map((user) => {
        return (
          <UserBox
            deleteUser={deleteUser}
            key={user.id}
            name={user.name}
            login={user.login}
            followers={user.followers}
            following={user.following}
            created_at={user.created_at}
            avatar_url={user.avatar_url}
            url={user.html_url}
          ></UserBox>
        );
      })}
    </div>
  );
}

export default Body;
