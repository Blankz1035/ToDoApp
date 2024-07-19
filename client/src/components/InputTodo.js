import React, { Fragment, useState } from 'react'

const InputTodo = () => {
    const [description, setDescription] = useState("");

    const onSubmitForm = async(e) => {
        e.preventDefault();
        try {
            const body = { description };
            const response = fetch("http://localhost:5000/todos", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            })
            console.log(response)
        } catch (error) {
            console.log(error.message);
        }
    }
  return (
    <Fragment>
        <h1 className='text-center mt-5 pb-5'>Input Todo</h1>
        <form>
            <div class="mb-3">
                <label for="ToDoDescription" class="form-label">Info</label>
                <input 
                type="text" 
                class="form-control" 
                id="ToDoDescription" 
                placeholder="Describe your todo..." 
                value={description}
                onChange={e => setDescription(e.target.value)}
                />
            </div>
            <button class="btn btn-success" type="button" id="createBtn" onClick={onSubmitForm}>Create</button>

        </form>
    </Fragment>
  )
}

export default InputTodo