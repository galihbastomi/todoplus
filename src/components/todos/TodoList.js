import React from 'react';
import TodoSummary from './TodoSummary';
import {isLoaded, isEmpty} from 'react-redux-firebase';
import {Link} from 'react-router-dom';
import ReactLoading from 'react-loading';

const TodoList = ({todos}) => { 
 return(
     <div className="todo-list section">
     {
     ! isLoaded(todos)? <ReactLoading
                        className="spinner"
                        type="bubbles"
                        color="grey"
                        height="5%"
                        width="5%"
                    /> 
     : isEmpty(todos) ?'Todo list is empty'
     : todos.map(todo => ( 
         <Link to={'/todo/' + todo.id} key={todo.id}>
            <TodoSummary todo={todo}/>
         </Link>
     ))}
       
     </div>
 )
}

export default TodoList;