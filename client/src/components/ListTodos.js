import React, { Fragment, useState, useEffect } from 'react'
import EditToDo from './EditToDo'

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

    //------------------------- get all todo

    const getAllTodos = async () => {
      try {
        const response = await fetch("http://localhost:5000/todos")
        const jsonData = await response.json();

        setTodos(jsonData)
      } catch (error) {
        console.log(error.message)
      }
    }

    //------------------------- delete todo
    const deleteTodo = async (id) => {
        try {

            const tid =  id;
            const response = await fetch(`http://localhost:5000/todos/${tid}`, {
                method: "DELETE",
            })
            // window.location = "/"; Can do this, but this will refetch data each time. Can avoid this using state.
            setTodos(todos.filter(todo => todo.todo_id !== id))
        } catch (error) {
            console.log(error.message);
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
            <th scope="col">Description</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos.map(todo => {
            return ( <tr key={todo.todo_id}>
              <td>{todo.description}</td>
              <td><EditToDo todo={todo}/></td>
              <td><button className='btn btn-danger' onClick={() => deleteTodo(todo.todo_id)}>Delete</button></td>
            </tr>
            )
          })}
        </tbody>
      </table>
    </Fragment>
  )
}

export default ListTodos