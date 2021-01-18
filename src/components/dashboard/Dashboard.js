import React,{Component} from 'react';
import Notifications from './Notifications';
import TodoList from '../todos/TodoList';
import { connect } from 'react-redux';
import { firestoreConnect} from 'react-redux-firebase';
import { compose } from 'redux' 
import { Redirect } from 'react-router-dom';

class Dashboard extends Component {
    render(){
        const {todos,auth} = this.props;
        if(!auth.uid && auth.isLoaded) return <Redirect to='/signin' />
         return(
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <TodoList todos={todos} />
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notifications />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state)=>{
    return {
        todos: state.firestore.ordered.todos,
        auth: state.firebase.auth
    }
}

export default compose(
    firestoreConnect( () => ['todos']
    ),
    connect(mapStateToProps)
)(Dashboard); 