import React, { Fragment, useState } from 'react';

const EditTodo = ({ todo }) => {

    const [ description, setDescription ] = useState(todo.description);

    const updateDescription = async (e) => {
        e.preventDefault(); //avoid refresh

        try {
            const body = { description };
            await fetch(`http://localhost:3000/todos/${todo._id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body)
            });
            
            window.location = '/'; // once the response has been sent, it is going to refresh and show the changes
        } catch (error) {
            console.error(error.message);
        }
    };

    return (
        <Fragment>
            {/* <!-- Button to Open the Modal --> */}
            <button type="button" className="btn btn-warning" data-toggle="modal" data-target={`#id${todo._id}`}>
            Edit
            </button>

            {/* <!-- The Modal --> */}
            <div className="modal" id={`id${todo._id}`} onClick={() => setDescription(todo.description)}>
                <div className="modal-dialog">
                    <div className="modal-content">

                        {/* <!-- Modal Header --> */}
                        <div className="modal-header">
                            <h4 className="modal-title">Edit Todo</h4>
                            <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                onClick={() => setDescription(todo.description)}
                            >&times;</button>
                        </div>

                        {/* <!-- Modal body --> */}
                        <div className="modal-body">
                            <input
                                type="text"
                                className="form-control"
                                value={description}
                                onChange={e => setDescription(e.target.value)} // change description state
                            ></input>
                        </div>

                        {/* <!-- Modal footer --> */}
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-warning"
                                data-dismiss="modal"
                                onClick={e => updateDescription(e)} // send the modified description
                            >Edit</button>
                            <button
                                type="button"
                                className="btn btn-danger"
                                data-dismiss="modal"
                                onClick={() => setDescription(todo.description)}
                            >Close</button>
                        </div>

                    </div>
                </div>
            </div>
        </Fragment>
    );

};

export default EditTodo;
