import React from "react";
import { Tabs, TabLink, TabContent } from "react-tabs-redux";

export default function UsersData({ userList, tabs }) {
  let usersOrderByLastName = [];
  if (userList.length > 0) {
    //sort the users A,B,C...
    userList.sort((a, b) => {
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
    //reduce into accumulator
    usersOrderByLastName = userList.reduce((acc, c) => {
      const letter = c.name.last.toUpperCase()[0];
      acc[letter] = (acc[letter] || []).concat(c);
      return acc;
    }, {});
  }
  const renderUsers = (keyName) => {
    return (
      <TabContent for={keyName} key={keyName}>
        {usersOrderByLastName[keyName].map(li => {
          console.log(li);
          return (
            <li key={li.email}>
              {li.name.last}, {li.name.first}
            </li>
          );
        })}
      </TabContent>
    );
  };

  const renderTab = tabs => {
    return (
      <TabLink to={tabs.toUpperCase()} key={tabs}>
        {tabs}
      </TabLink>
    );
  };

  return (
    <div>
      <Tabs>
        {tabs.map(renderTab)}
        {Object.keys(usersOrderByLastName).map(renderUsers)}
      </Tabs>
    </div>
  );
}
