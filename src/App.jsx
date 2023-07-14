import './App.css'
import { useState } from 'react'
import {v4 as uuidv4} from 'uuid'

// Components
import User from './components/user/User'
import Form from './components/form/Form'


function App() {

  const [users, setUsers] = useState([])

  function deleteUser(id) {
    setUsers(prev => {
      return prev.filter(user => {
        return user.id !== id
      })
    })
  }

  function addUser(user) {
    setUsers((prev)=> {
      return [...prev, user]
    })
  }

  return (
    <div className='app'>
      <main className='main-page'>
        <Form addUser={addUser}/>
        <User deleteUser={deleteUser} users={users}/>
      </main>
    </div>
  )
}

export default App