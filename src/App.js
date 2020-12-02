
import React ,{useState} from 'react';
import List from './List';
import data from './data';

function App() {
  const[people,setPeople] = useState(data);
  return (
    <main>
      <div className='container'>
        <h3> {people.length} Birthday Today</h3>
        <List/>
        <button>Clear All</button>
      </div>
    </main>
  );
}

export default App;
