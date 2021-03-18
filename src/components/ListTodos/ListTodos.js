import React, { Fragment, useEffect, useState } from 'react';

// components
import EditTodo from './../EditTodo/EditTodo';

const ListTodos = () => {

    const [ todos, setTodos ] = useState([]);

    const getTodos = async () => {
        try {
            const response = await fetch('http://localhost:3000/todos');
            const data = await response.json();
            
            setTodos(data);
        } catch (error) {
            console.error(error.message);
        }
    };

    // useEffect is gonna make a fetch request to our api every time this component is rendered
    useEffect(() => {
        getTodos();
    }, []);
    // useEffect keeps making requests once the render happens, to make only one request, [] is added

    const deleteTodo = async (id) => {
        try {
            await fetch(`http://localhost:3000/todos/${id}`, {
                method: 'DELETE'
            });

            getTodos(); // setTodos(todos.filter(todo => todo.id !== id));
        } catch (error) {
            console.error(error.message);
        }
    };

    return (
        <Fragment>
            <table className="table mt-5 text-center">
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map(todo => (
                        <tr key={todo._id}>
                            <td>{todo.description}</td>
                            <td><EditTodo todo={todo} /></td>
                            <td><button className="btn btn-danger" onClick={() => deleteTodo(todo._id)}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Fragment>
    );

};

export default ListTodos;
