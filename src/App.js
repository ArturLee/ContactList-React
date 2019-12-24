/* eslint-disable react/jsx-filename-extension */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UsersData from './components/UsersData';
import './styles/styles.scss';
import Spinner from './components/Spinner';

function App() {
  const userUrl = 'https://randomuser.me/api/?results=';
  const numberCards = 120;
  const tabs = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    async function fetchAPI() {
      await axios.get(userUrl + numberCards).then((data) => {
        setUsers(data.data.results);
        setLoading(false);
      }).catch((err) => console.log(err));
    }
    fetchAPI();
  }, []);

  return (
    <div>
      {loading ? (<Spinner />) : (
        <div className="main">
          <h1 className="title">Contact List</h1>
          <UsersData userList={users} tabs={tabs} />
        </div>
      )}

    </div>
  );
}

export default App;
