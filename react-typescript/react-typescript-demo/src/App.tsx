import React from 'react';
import { Button } from './components/Button';
import { ThemeContextProvider } from './components/context/ThemeContext';
import { Box } from './components/context/Box';
import { Greet } from './components/Greet';
import { HeadingChildren } from './components/HeadingChildren';
import { Input } from './components/Input';
import { Oscar } from './components/Oscar';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Counter } from './components/State/Counter';
import { CounterStrictActionTypes } from './components/State/CounterStrictActionTypes';
import { Logged } from './components/State/Logged';
import { UserAssertion } from './components/State/UserAssertion';
import { Status } from './components/Status';
import { StyleContainer } from './components/StyleContainer';
import { UserContextProvider } from './components/context/UserContext';
import { User } from './components/State/User';
import { Users } from './components/context/Users';
import { ClassCounter } from './components/ClassCounter';
import { PrivatePage } from './components/auth/PrivatePage';
import { Profile } from './components/auth/Profile';
import { List } from './components/generic/List';
import { RandomNumber } from './components/restrictingprops/RandomNumber';
import { Toast } from './components/templateliterals/Toast';
import { Extract } from './components/extractingprops/Extract';

function App() {

  const name = {
    firstName: "Vishwas",
    lastName: "CodeEvolution"
  }

  const nameList = [
    {
      first: "Elon",
      last: "Musk"
    },
    {
      first: "Albert",
      last: "Einstein"
    }
  ]

  return (
    <div className="App">
      {/* <Greet name="ReactTypeScriptGreet" messageCount={10} isLoggedIn={true} />
      <Person name={name} />
      <PersonList nameList={nameList} /> */}


      {/* Advanced Props */}
      {/* <Status status="Loading" /> 
      <HeadingChildren>HeadingChildren Text</HeadingChildren>
      <Oscar>
        passing component inside a component (comment while run)
        <HeadingChildren>Oscar children text</HeadingChildren>
      </Oscar>
      <Greet name="Greeshma" isLoggedIn={true} /> */}


      {/* Event props --> Click Event on a button, change event on input */}
      {/* <Button handleClick={(event, id) => {console.log("Button Clicked", event, id)}} />
      <Input value="" handleChange={(event) => console.log(event)} /> */}


      {/* Style Props */}
      {/* <StyleContainer styles={{"border":"1px solid black", "color":"red", "background":"yellow", "padding":"10px"}} /> */}


      {/* useState Hooks */}
      {/* <Logged />
      <User /> 
      <UserAssertion /> */}


      {/* useReducer Hooks */}
      {/* <Counter />
      <CounterStrictActionTypes /> */}


      {/* useContext */}
      {/* <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
      <UserContextProvider>
        <Users />
      </UserContextProvider> */}


      {/* Class Components, setting type for state and props */}
      {/* <ClassCounter message="The Counter Value is: " /> */}

    
      {/* Passing Component as a props */}
      {/* <PrivatePage isLoggedIn={false} component={Profile} /> */}


      {/* Generic Props */}
      {/* <List items={['Apple', 'Bat', 'Cat']} onClick={(item) => console.log(item)} />
      <List items={[1, 2, 3]} onClick={(item) => console.log(item)} />
      <List items={[
        {
          id: 1,
          name: "Gree",
          age: 24
        },
        {
          id: 2,
          name: "Sree",
          age: 26
        }
      ]} onClick={(item) => console.log(item)} /> */}


      {/* Restricting Props */}
      {/* <RandomNumber value={10} isPositive /> */}


      {/* Template Literals and exclude */}
      {/* <Toast position='center' /> */}


      {/* Extracting a component prop types. Here, we are extracting props from Greet.tsx */}
      {/* <Extract name="Greeshma" isLoggedIn={true} /> */}

    </div>
  );
}

export default App;
