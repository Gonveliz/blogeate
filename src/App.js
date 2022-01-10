import './App.css';
import { Avatar } from './components/Avatar';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="App">
      <main className="App-main">
          <Navbar/>
          <Avatar userName="Roman Alberto" />
          <Form onsumbmit={myForm(props.event)} name={props.name} lastname={props.lastname} email={props.name}/>
      </main>
    </div>
  );
}
export default App;
