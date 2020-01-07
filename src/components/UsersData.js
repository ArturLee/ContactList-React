/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Tabs, TabLink, TabContent } from 'react-tabs-redux';
import uniqid from 'uniqid';
import UserCard from './UserCard';
import { tabs } from '../constants';

export default function UsersData({ userList }) {
  const [showCard, setShowCard] = useState(false);
  const [showUserCard, setShowUserCard] = useState();
  let usersOrderByLastName = [];

  if (userList.length > 0) {
    // sort the users A,B,C...
    userList.sort((a, b) => {
      const nameA = a.name.last.toUpperCase();
      const nameB = b.name.last.toUpperCase();
      return nameA - nameB;
    });
    // reduce into accumulator
    usersOrderByLastName = userList.reduce((acc, c) => {
      const letter = c.name.last.toUpperCase()[0];
      acc[letter] = (acc[letter] || []).concat(c);
      return acc;
    }, {});
  }

  const buttonUsers = (user) => (
    <div key={uniqid()}>
      <button className="contactBtn" type="button" onClick={() => { setShowCard(true); setShowUserCard(user); }}>
        <h3>
          {user.name.first}
          ,
          {'  '}
          {user.name.last.toUpperCase()}
        </h3>
      </button>
      <hr />
    </div>
  );

  const renderUsers = (keyName) => (
    <TabContent for={keyName} key={uniqid()}>
      {usersOrderByLastName[keyName].map(buttonUsers)}
    </TabContent>
  );
  
  const getLength = (tab) => {
    let tabLenght = 0;
    if (usersOrderByLastName[tab]) {
      tabLenght = usersOrderByLastName[tab].length;
      return tabLenght;
    }
    return tabLenght;
  };

  const renderTab = (tab) => (
    <TabLink to={tab.toUpperCase()} key={tab} onClick={() => { setShowCard(false); }}>
      <h2>{tab}</h2> 
      <br/>
      <span>{getLength(tab.toUpperCase())}</span>
    </TabLink>
  );

  return (
    <div>
      <Tabs className="tabs">
        {tabs.map(renderTab)}
        {Object.keys(usersOrderByLastName).map(renderUsers)}
        <div>
          {showCard && (
          <div className="card">
            <button className="closeBtn" type="button" onClick={() => { setShowCard(false); }}>x</button>
            <UserCard
              name={showUserCard.name}
              img={showUserCard.picture.large}
              email={showUserCard.email}
              phone={showUserCard.phone}
              location={showUserCard.location}
            />
          </div>
          )}
        </div>
      </Tabs>
    </div>
  );
}
