import React, { Fragment, useState } from 'react'

const InputTodo = () => {
    const [description, setDescription] = useState("");

    const onSubmitForm = async(e) => {
        e.preventDefault();
        try {
            const body = { description };

            if (description.length <5){
                alert("Enter a description for your todo.")
                return
            }
            const response = await fetch("http://localhost:5000/todos", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            })
            console.log(response)
            window.location = "/";
        } catch (error) {
            console.log(error.message);
        }
    }
  return (
    <Fragment>
        <h1 className='text-center mt-5 pb-5'>PERN Input Todo</h1>
        <form>
            <div class="mb-3">
                <label for="ToDoDescription" class="form-label">Todo Details</label>
                <input 
                type="text" 
                class="form-control" 
                id="ToDoDescription"
                minlength= "5" 
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