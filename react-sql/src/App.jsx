import { useState } from 'react'
import { useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import mySqlLogo from './assets/mysql-official.svg'
import './App.css'

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('http://localhost:8081/users') // Backend server link 'http://localhost:8081/... 
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => console.log(err));
  }, [])
  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://www.mysql.com/" target="_blank">
          <img src={mySqlLogo} className="logo" alt="MySQL logo" />
        </a>
      </div>
      <h1>React + Vite | MySQL</h1>
      <div className="card"></div>
      <div>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Username</th>
              <th>email</th>
            </tr>
          </thead>
          <tbody>
            {data.map((d, i) => (
              <tr key={i}>
                <td>{d.id}</td>
                <td>{d.username}</td>
                <td>{d.email}</td>
              </tr>
            
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default App
