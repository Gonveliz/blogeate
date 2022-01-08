import './App.css';
import { Avatar } from './components/Avatar';
import { Buttom } from './components/Buttom.jsx'

function App() {
  return (
    <div className="App">
      <main className="App-main">
          <Avatar userName="Roman Alberto" />
      </main>
      <header className="App-header">
      <Buttom title='LEER MAS'/>
      </header>
    </div>
  );
}

export default App;
