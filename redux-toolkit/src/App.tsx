import './App.css'
import Counter from './components/counter/Counter'
import AddTodo from './components/Todos/AddTodo'
import Todos from './components/Todos/Todos'

function App() {

  return (
    <>
      <h1>Learn about redux toolkit</h1>
      <AddTodo/>
      <Todos />
      <hr  style={{marginTop: '50px', marginBottom: '20px'}}/>
      <div>Counter Component</div>
      <Counter />
    </>
  )
}

export default App
