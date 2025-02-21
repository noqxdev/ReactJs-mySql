import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import mySqlLogo from './assets/mysql-official.svg'
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import './App.css'

function DataGridDemo({ rows }) {
  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'username', headerName: 'Username', width: 150 },
    { field: 'email', headerName: 'Email', width: 200 },
  ];

  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('http://localhost:8081/users')
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => console.log(err));
  }, [])

  const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

  return (
    <>
      <ThemeProvider theme={darkTheme}>
      <CssBaseline />
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
      <div className="card"></div>
      <div>
      </div>
        <DataGridDemo rows={data} />
           </ThemeProvider>
    </>
  )
}

export default App