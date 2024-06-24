import logo from './logo.svg';
import './App.css';
import useWebSocket from './hooks/useWebSocket';
import { db } from './firebase.config';
import { collection, addDoc } from 'firebase/firestore';

function App() {

  const data = useWebSocket('wss://ws.coincap.io/prices?assets=bitcoin,ethereum,monero,litecoin');

  const handleSubmit = async (e) => {
    try {
      const docRef = await addDoc(collection(db, 'coins'), {
        value: JSON.stringify(data),
        // timestamp: new Date().toISOString()
      });
      console.log('Document written with ID: ', docRef.id);
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };


  return (
    <div className="App">
      <header className="App-header">
        <button onClick={()=>{
          handleSubmit();
        }}>Click Me</button>
        {JSON.stringify(data)}
      </header>
    </div>
  );
}

export default App;
