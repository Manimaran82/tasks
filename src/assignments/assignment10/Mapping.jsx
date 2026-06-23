import React, { useState } from 'react'

const Mapping = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  })

  const [save, setSave] = useState([])
  const [edit, setEdit] = useState(null)

  const handle = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const change = (e) => {
    e.preventDefault()

    if (
      user.name === '' ||
      user.email === '' ||
      user.password === ''
    ) {
      alert('Please fill all fields')
      return
    }

    if (edit !== null) {
      const updated = [...save]
      updated[edit] = user
      setSave(updated)
      setEdit(null)
    } else {
      setSave([...save, user])
    }

    setUser({ name: '', email: '', password: '' })
  }

  const changeEdit = (data, i) => {
    setUser(data)
    setEdit(i)
  }

  const changeDelete = (i) => {
    setSave(save.filter((_, index) => index !== i))
  }

  return (
    <div className="bg-blue-800 min-h-screen text-white p-5">
      <div className="bg-green-600 border-2 p-5 max-w-lg mx-auto rounded">
        <form onSubmit={change}>
          <table className="w-full">
            <tbody>
              <tr>
                <td className="p-2">Enter Name</td>
                <td className="p-2"> <input type="text" name="name" value={user.name} onChange={handle} className="border w-full text-black p-1"/></td>
              </tr>

              <tr>
                <td className="p-2">Enter Email</td>
                <td className="p-2"><input type="email" name="email" value={user.email} onChange={handle} className="border w-full text-black p-1"/></td>
              </tr>

              <tr>
                <td className="p-2">Enter Password</td>
                <td className="p-2"><input type="password" name="password" value={user.password} onChange={handle} className="border w-full text-black p-1"/></td>
              </tr>

              <tr>
                <td colSpan="2" className="text-center pt-4"><input type="submit" className="bg-black text-white px-4 py-2 rounded cursor-pointer"/>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>

      <div className="mt-8 max-w-lg mx-auto">
        {save.map((e, i) => (
          <div key={i} className="bg-amber-800 text-white p-4 mb-4 rounded">
            <p>
              <strong>Name:</strong> {e.name}
            </p>
            <p>
              <strong>Email:</strong> {e.email}
            </p>
            <p>
              <strong>Password:</strong> {e.password}
            </p>

            <div className="mt-3">
              <button
                className="bg-green-500 px-3 py-1 rounded mr-2"
                onClick={() => changeEdit(e, i)}
              >
                Edit
              </button>

              <button
                className="bg-red-500 px-3 py-1 rounded"
                onClick={() => changeDelete(i)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Mapping