import './App.css'
import UserList from './components/Users/List'

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Bem Vindo!
      </h1>
      <div>
        <UserList />
      </div>
    </>
  )
}

export default App
