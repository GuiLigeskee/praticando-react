import { useState } from 'react'

const ListRender = () => {

  const [list] = useState(["Matheus", "Eros", "Lucas", "Maria"])

  const [users, setUsers] = useState([
    {id: 8214142, name: "Guilherme", age: 18},
    {id: 8214143, name: "Barbara", age: 17},
    {id: 8214144, name: "Joelma", age: 48},
    {id: 8214145, name: "Fabio", age: 45}
  ])

  const deleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * 3);

    setUsers((prevUsers) => {
      console.log(prevUsers)
      return prevUsers.filter((users) => randomNumber !== users.id)
    })
  }

  return (
    <div>
      <ul>
        {list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <ul>
        {users.map((users) => (
          <li key={users.id}>
            {users.name} - {users.age}
          </li>
        ))}
      </ul>
      <button onClick={deleteRandom}>Delete random user</button>
    </div>
  )
}

export default ListRender