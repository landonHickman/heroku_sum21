
import './App.css';
import Things from './Things';
import MyProjects from './MyProjects';

function App() {
  return (
    <div className="App">
      <h1>Things (from my api)</h1>
      <hr/>
      <Things />
      <hr/>
      <hr/>
      <h1>Things (from git api)</h1>
      <hr/>
      <MyProjects />
    </div>
  );
}

export default App;
