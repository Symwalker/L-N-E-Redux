import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './store/Action';

function App() {
  const counter = useSelector((state)=>state.counterReducer) 
  const dispatch = useDispatch()
  return (
    <div className="App">
     <h1>welcome to react redux</h1>
     <input type={"text"} value={counter} /><br/>
     <button className='m-1 btn btn-primary' onClick={()=>dispatch(increment())}>Add 1</button>
     <button className='m-1 btn btn-danger' onClick={()=>dispatch(decrement())}>minus 1</button>
    </div>
  );
}

export default App;
