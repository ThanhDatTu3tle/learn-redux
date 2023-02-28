import { useSelector, useDispatch } from 'react-redux';
import { addTopping } from './pizzaSlice';
import './App.css';

function App() {

  const pizza = useSelector(state => state.pizza)
  const dispatch = useDispatch()

  return (
    <div className="App">
      <h1>Pizza</h1>

      <h3>Pizza toppings:</h3>
      {pizza.toppings.map(topping => (
        <div key={topping}>{topping}</div>
      ))}

      <button onClick={() => dispatch(addTopping('pepperoni'))}>Add Pepperoni</button>
    </div>
  );
}

export default App;
