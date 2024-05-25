import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Alert, Card } from 'react-bootstrap';

import { Badge } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { getData } from './redux/todoSlice';
function App() {




  // const [data, setData] = useState([])
  const data = useSelector((state) => {


    return state.todo.data;
  })
  const dispatch = useDispatch()

  console.log("data is ", data)

  useEffect(() => {

    dispatch(getData())


    // fetch("http://localhost:4000/api/v1/tasks", {
    //   method: 'GET'
    // }).then(async (response) => {
    //   const res = await response.json()
    //   console.log(res)
    //   setData(res.data);

    // })



  }, [])
  return (
    <div className="App">

      <Form></Form>

      {data.map((element) => {
        return (
          <div className='box'>
            <p> {element.fname}</p>
            <p> {element.age}</p>
            <p> {element.city}</p></div>
        )
      })}

    </div>
  );
}

export default App;
