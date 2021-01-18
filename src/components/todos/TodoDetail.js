import React from 'react'
import { connect } from 'react-redux';
import { firestoreConnect} from 'react-redux-firebase';
import { compose } from 'redux' 
import { Redirect } from 'react-router-dom';
import moment from 'moment';


const TodoDetail = (props) => {
    const {todo,auth} = props;
    if(!auth.uid && auth.isLoaded) return <Redirect to='/signin' />

     return todo ? (
                <div className="container section todo-detail">
                    <div className="card z-depth-0">
                        <div className="card-content">
                            <span className="card-title">{todo.title} </span>
                            <p>{todo.content}</p>
                        </div>
                        <div className="card-action gret lighten-4 grey-text">
                            <div>Posted by {todo.authorFirstName}</div>
                            <div>{moment(todo.createdAt.toDate()).calendar()}</div>
                        </div>

                    </div>
                </div>
     ) : (
         <div className="container center">
            <p>Loading todo...</p>
        </div>
     )

        
}

const mapStateToProps = (state, ownProps) =>{
    const id = ownProps.match.params.id;
    const todos = state.firestore.data.todos
    const todo = todos ? todos[id] : null;
console.log(state)
    return{
        todo: todo,
        auth: state.firebase.auth
    }

}

export default compose(
    firestoreConnect( () => ['todos']
    ),
    connect(mapStateToProps)
)(TodoDetail); 
