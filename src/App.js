import './App.css';
import { Avatar } from './components/Avatar';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="App">
      <main className="App-main">
          <Navbar/>
          <Avatar userName="Roman Alberto" />
      </main>
    </div>
  );
}

export default App;
