import './App.css'
import MyForm from './components/MyForm'

function App() {

  return (
    <>
     <h2>Forms</h2>
     <MyForm user={{ name: "Josias", email: "josias@gmail.com", bio: "Engenheiro de Software", role: "admin"}}/>
    </>
  )
}

export default App
