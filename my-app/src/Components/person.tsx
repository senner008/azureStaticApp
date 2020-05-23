
import React from 'react';

interface IPerson {
    name: string;
    age : number;

  }

function Person({name, age}: IPerson) {

  return (
    <>
        <p>Hello my name is {name}</p>
        <p>I am {age} years old</p>
    </>
  );
}

export default Person;
