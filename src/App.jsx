import './App.css'
import NestedComment from './components/NestedComment'
import data from "./data/data.json"

function App() {


  return (
    <>
      <h1>Nested Comments</h1>
      {console.log(data)}
      <NestedComment data={data}/>
      
    </>
  )
}

export default App
