import styles from './App.module.css';
import { Header } from './components/Header';
import { InputText } from './components/InputText';
import { Tasks } from './components/Tasks';

import './global.css';

export function App() {

  return (
    
    <div className="App">
          <Header />
          <InputText />
          <Tasks/>
    </div>
  )
}
