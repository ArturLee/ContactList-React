import React, { useEffect, useState } from "react";
import axios from "axios";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import UserData from "./components/UsersData"

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

  const [users, setUsers] = useState();

  useEffect(() => {
    axios.get(userUrl + numberCards).then(data => {
      setUsers(data.data.results);
    });
  }, []);

  //
  // -- sort Last name
  //
  if (users) {
    let sortUser = users.sort((a, b) => {
      let nameA = a.name.last.toUpperCase();
      let nameB = b.name.last.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });

    //
    // -- filter Last Name
    //
    const filterUser = users.filter(a => {
      return a.name.last.toUpperCase()[0] === "A";
    });

    console.log(sortUser);
    console.log(filterUser);
  }

  const renderTab = tabs => {
    return <Tab key={tabs}>{tabs}</Tab>;
  };

  return (
    <div>
      <h1>Contact List</h1>

      <Tabs>
        <TabList>{tabs.map(renderTab)}</TabList>
        <UserData users={users}/>
        <TabPanel></TabPanel>
        <TabPanel></TabPanel>
      </Tabs>
    </div>
  );
}

export default App;
