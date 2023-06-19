// reacthook + function component 사용

import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <p>{`count: ${count}`}</p>
      <button onClick={ ()=> setCount(count+2)}>+</button>
    </div>
  );
}

export default App;
