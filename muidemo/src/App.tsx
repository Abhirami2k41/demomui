import './App.css';
import {MuiButton} from './components/MuiButton';
import {MuiTypography} from './components/MuiTypography';

function App() {
  return (
    <div className="App">
      <header className='App-header'>
        <MuiTypography />
      </header>
      <main className='App-main'>
        <MuiButton />
      </main>
    </div>
  );
}

export default App;
