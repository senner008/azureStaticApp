
import React from 'react';

export interface IPerson {
    name: string;
    yearsBornAgo : number;
}

function Person({name, yearsBornAgo}: IPerson) {

  return (
    <>
        <p>Hello my name is {name}</p>
        <p>I was born {yearsBornAgo} years ago</p>
    </>
  );
}

export { 
  Person 
}

