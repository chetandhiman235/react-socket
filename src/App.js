import logo from './logo.svg';
import './App.css';
import useWebSocket from './hooks/useWebSocket';

function App() {

  const data = useWebSocket('wss://ws.coincap.io/prices?assets=bitcoin,ethereum,monero,litecoin');

  return (
    <div className="App">
      <header className="App-header">
        {JSON.stringify(data)}
      </header>
    </div>
  );
}

export default App;
