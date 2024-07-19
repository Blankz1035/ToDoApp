import React, { Fragment, useState, useEffect } from 'react'

const ListTodos = () => {
  const [todos, setTodos ] = useState([])


    // const onSubmitForm = async(e) => {
    //     e.preventDefault();
    //     try {
    //         const body = { description };
    //         const response = await fetch("http://localhost:5000/todos", {
    //             method: "POST",
    //             headers: {"Content-Type": "application/json"},
    //             body: JSON.stringify(body)
    //         })
    //         window.location = "/";
    //     } catch (error) {
    //         console.log(error.message);
    //     }
    // }

    const getAllTodos = async () => {
      try {
        const response = await fetch("http://localhost:5000/todos")
        const jsonData = await response.json();

        setTodos(jsonData)
      } catch (error) {
        console.log(error.message)
      }
    }

    // get data from postgres onload once
    useEffect(() => {
      getAllTodos();
    }, [])


  return (
    <Fragment>
        <h1 className='text-center mt-5 pb-5'>PERN List All Todo</h1>
        <table class="table mt-4 text-center">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Description</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos.map(todo => {
            return ( <tr>
              <th scope="row">{todo.todo_id}</th>
              <td>{todo.description}</td>
              <td>e</td>
              <td>d</td>
            </tr>
            )
          })}
        </tbody>
      </table>
    </Fragment>
  )
}

export default ListTodos