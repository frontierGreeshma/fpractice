import { useState } from 'react';
import AddPeopleList from './components/AddPeopleList';
import List from './components/List';

export type IState = {
  people: {
    id: number,
    name: string,
    age: number,
    note?: string,
    url?: string
  }[]
}

function App() {

  const [people, setPeople] = useState<IState["people"]>([{
    id: 1,
    name: "greeshma",
    age: 10,
    note: "jbdjbedjd",
    url: "kbejbfkef"
  },
  {
    id: 2,
    name: "greeshma",
    age: 10
  }
])
  
  return (
    <div className="App" style={{"textAlign":"center"}}>
      <h1>People invited to the party</h1>
      <List people={people} />
      <AddPeopleList people={people} setPeople={setPeople} />
    </div>
  );
}

export default App;
