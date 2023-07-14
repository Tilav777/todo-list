import { useState } from 'react'
import {v4 as uuidv4} from 'uuid'
import './Form.css'

function Form({addUser}) {

  const user = {
      id: uuidv4(),
      image: '',
      date: ''
  }
  const [url, setUrl] = useState('')
  const [date, setDate] = useState('')

  const [showInput, setInput] = useState(false)

  function handleClick(e) {
    e.preventDefault()
    setInput(true)
  }

  function SendFunc(e) {
    e.preventDefault()
    addUser({
      ...user,
      image: url ? url : '/dist/image.jpg',
      date: date
    })
    setUrl('')
    setDate('')
    setInput(false)
  }


  return (
    <form onSubmit={SendFunc} className='form-container'>
      {showInput ? <div className='form-inp'><input type="url" placeholder='Enter an image url !' onChange={e => {
        setUrl(e.target.value)
      }} value={url}/> <input type="text" placeholder="Enter friend's birthday !" onChange={e => {
        setDate(e.target.value)
      }} value={date} required/></div> : <h2>Enter a todo list !</h2>}
      {showInput ? <button type='submit' >Send</button> : <button type='button' onClick={handleClick}>Enter</button>}
    </form>
  )
}

export default Form