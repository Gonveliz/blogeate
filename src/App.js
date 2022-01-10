import './App.css';
import { Avatar } from './components/Avatar';

function App() {
  return (
    <div className="App">
      <main className="App-main">
          <Avatar userName="Roman Alberto" />
          <Form onsumbmit={myForm(props.event)} name={props.name} lastname={props.lastname} email={props.name}/>
      </main>
    </div>
  );
}
export default App;
