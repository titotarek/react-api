
import './App.css';
import {BrowserRouter , Route } from 'react-router-dom'
import HomePage from './components/HomePage';
import OneActor from './components/OneActor';

    
   

function App() {
  
  return (
    <div className='app'>
      <BrowserRouter>
    
         <Route exact path='/'  component={HomePage}/>
         <Route exact path='/Characters/:id'  component={OneActor}/>
     
     </BrowserRouter>
     
      
    </div>
  );
  }
  export default App
