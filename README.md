# TODO PERN full-stack app 

## Application Introduction
This repository contains a Todo application built using the PERN stack (PostgreSQL, Express.js, React, and Node.js). The application allows users to create, read, update, and delete todo items.

## Features

- **Create Todo**: Add new todo items.
- **Read Todo**: View all or individual todo items.
- **Update Todo**: Edit existing todo items.
- **Delete Todo**: Remove todo items.

## Folder Structure

```bash
├── client
│ ├── public
│ ├── src
│ │ ├── components
│ │ │ ├── EditTodo.js
│ │ │ ├── InputTodo.js
│ │ │ └── ListTodos.js
│ │ ├── index.js
│ │ ├── App.js
│ │ └── ...
├── server
│ ├── database.sql
│ ├── db.js
│ ├── index.js
│ └── ...
├── package.json
└── README.md
````
## API Endpoints

- **Create Todo**
  - **URL**: `/todos`
  - **Method**: `POST`
  - **Description**: Creates a new todo item.
  - **Request Body**:
    ```json
    {
      "description": "string"
    }
    ```

- **Get All Todos**
  - **URL**: `/todos`
  - **Method**: `GET`
  - **Description**: Retrieves all todo items.

- **Get One Todo**
  - **URL**: `/todos/:id`
  - **Method**: `GET`
  - **Description**: Retrieves a single todo item by ID.

- **Update Todo**
  - **URL**: `/api/todos/:id`
  - **Method**: `PUT`
  - **Description**: Updates an existing todo item by ID.
  - **Request Body**:
    ```json
    {
      "description": "string"
    }
    ```

- **Delete Todo**
  - **URL**: `/todos/:id`
  - **Method**: `DELETE`
  - **Description**: Deletes a todo item by ID.

## Core Components

### `InputTodo.js`

- **Description**: Component for adding a new todo item.
- **Usage**: Renders a simple form with an input field and a submit button.

### `ListTodo.js`

- **Description**: Component for listing all todo items.
- **Usage**: Displays a simple table of todo items with edit and delete buttons.

### `EditTodo.js`

- **Description**: Component for editing a todo item.
- **Usage**: Renders a modal dialog with a form to edit the selected todo item - called from edit button in table

## Getting Started

### Prerequisites

- Node.js
- PostgreSQL
- React

### Installation

1. **Clone the repository**:
   ```bash
    git clone https://github.com/your-username/todo-app.git
    cd todo-app
2. **Install dependencies**:
    ```bash
    cd client
    npm install
    cd ../server
    npm install
3. **Set up PostgreSQL database**:
- Create a database named todoapp.
- Create a table called todos.
- Update the server/db/index.js file with your database credentials. (create .env file under Server folder with 
 DB_USER = ""
DB_PWORD = ""
)
4. **Run Server**:
- cd server
- nodemon index

5. **Run Client**:
- cd client
- npm start

### Usage
Open your browser and navigate to http://localhost:3000 to see the Todo application in action.

### Disclaimer
This application was built as part of my continuous upskilling journey to compliments my existing web dev knowledge. I undertook this to learn more on react. 

The tutorial is not extensive but it does go through in some detail on some key components.

### Credits
- Tutorial: https://www.youtube.com/watch?v=ldYcgPKEZC8&t=5s&ab_channel=freeCodeCamp.org