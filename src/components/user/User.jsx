import './User.css'


function User({deleteUser, users}) {
  

  return (
    <div className='user-container'>
      <h1>Todo list: {users.length}</h1>
        {users.map((user)=> {
          return (
            <div className="user" key={user.id}>
              <div className="user-data">
                <img src={user.image} alt="photo" />
                <h2>{user.date}</h2>
              </div>
              <button onClick={()=> {
                deleteUser(user.id)
              }} className='delete-btn'>Delete</button>
            </div>
          )
        })}
    </div>
  )
}

export default User