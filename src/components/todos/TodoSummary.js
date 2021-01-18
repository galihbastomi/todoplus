import React from 'react';
import moment from 'moment';

const TodoSummary = ({todo}) => {
    return(
        <div className="card z-depth-0 length-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{todo.title}</span>
                <p> Posted by {todo.authorFirstName}</p>
                <p className="grey0-text">{moment(todo.createdAt.toDate()).calendar()}</p>
            </div>
        </div>
    )
}

export default TodoSummary;