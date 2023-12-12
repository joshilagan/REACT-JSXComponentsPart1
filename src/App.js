import './App.css';
import Job from './Job';

function App() {
  return (
    <div className="App">
      <Job salary="12,000" position="Senior SDE" company="Amazon"/>
      <Job salary="9,000" position="Junior SDE" company="Google"/>
      <Job salary="18,000" position="Project Manager" company="Netflix"/>
      

    </div>
  );
}

export default App;
