import React, { useEffect, useState } from "react";
import axios from "axios";
import "react-tabs/style/react-tabs.css";
import UsersData from "./components/UsersData";

function App() {
  const userUrl = "https://randomuser.me/api/?results=";
  const numberCards = 120;
  const tabs = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
  ];

  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchAPI() {
      await axios.get(userUrl + numberCards).then(data => {
        setUsers(data.data.results);
      });
    }

    fetchAPI();
  }, []);

  return (
    <div>
      <h1>Contact List</h1>
      <UsersData userList={users} tabs={tabs} />
    </div>
  );
}

export default App;
