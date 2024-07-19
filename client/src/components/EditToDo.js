import React, { Fragment, useState } from 'react'

const EditToDo = ({ todo }) => {
  const [description, setDescription] = useState(todo?.description);

    const updateTodo = async(e) => {
        e.preventDefault();
        try {
            const body = { description };
            const response = await fetch(`http://localhost:5000/todos/${todo.todo_id}`, {
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            })
            window.location = "/";
        } catch (error) {
            console.log(error.message);
        }
    }

  return (
    <Fragment>
      <button 
      type="button" 
      class="btn btn-primary" 
      data-bs-toggle="modal" 
      data-bs-target={`#id${todo.todo_id}`}>
        Edit
      </button>

      <div class="modal fade" id={`id${todo.todo_id}`} data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="editModalLabel">Edit Todo</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <input type="text" className='form-control' onChange={(e) => setDescription(e.target.value)} value={description}/>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-primary" onClick={updateTodo}>Edit</button>
              <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default EditToDo