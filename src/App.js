/* eslint-disable object-curly-newline */
/* eslint-disable react/jsx-filename-extension */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UsersData from './components/UsersData';
import './styles/styles.scss';
import Spinner from './components/Spinner';
import { title, userUrl, numberCards, tabs } from './constants';

function App() {
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
          <h1 className="title">{title}</h1>
          <UsersData userList={users} tabs={tabs} />
        </div>
      )}

    </div>
  );
}

export default App;
